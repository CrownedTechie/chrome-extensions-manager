import "./index.css";
import { Button, Card, EmptyState, Header, SectionHeader } from "./components";
import { usePreferredTheme } from "./utils";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { EmptyStateIcon } from "./assets";
	
function App() {
	const searchParams = new URLSearchParams(window.location.search);
	const query = searchParams.get("tab") || "All";
	const [activeTab, setActiveTab] = useState<string>(query);
	const [extensions, setExtensions] = useState<ChromeExtensionInfo[]>([]);
	const { theme, setTheme } = usePreferredTheme();

	const updateQuery = (
		key: IUpdateQueryParams["key"], 
		value: IUpdateQueryParams["value"]
	) => {
		if (value) {
			searchParams.set(key, value);
		} else {
			searchParams.delete(key);
		}

		window.history.pushState({}, "", `${window.location.pathname}?${searchParams}`);
	};

	const fetchExtensions = () => {
		chrome.runtime.sendMessage( 
			"getExtensions", 
			(response: { extensions?: ChromeExtensionInfo[] }) => {
				if (response?.extensions) {
					setExtensions(response.extensions);
				}
			}
		);
	};

	useEffect(() => {
		fetchExtensions();
	}, []);
		
		
		const handleTabClick = (tab: string) => {
			setActiveTab(tab);
			updateQuery("tab", tab);
		};

		const handleToggleActive = (id: string, newState: boolean) => {
			chrome.runtime.sendMessage(
				{
					type: "toggleExtension",
					payload: { id, enable: newState }
				} as IToggleExtensionMessage,
				(response: ISuccessProps) => {
					if (response?.success) {
						setTimeout(fetchExtensions, 100);
					} 
				}
			)
		};

		const handleRemoveExtension = (id: string) => {
			chrome.runtime.sendMessage(
				{
					type: "removeExtension",
					payload: { id }
				},
				(response: ISuccessProps) => {
					if (response?.success) {
						fetchExtensions();
					}
				}
			)
		};

		const activeCards = extensions.filter(item => item.enabled);
		const inactiveCards = extensions.filter(item => !item.enabled);
		const filteredCards = {
			All: extensions,
			Active: activeCards,
			Inactive: inactiveCards
		}[activeTab] || [];

  return (
    <>
      <main>
							<Header 
									setTheme={setTheme}
									theme={theme}
							/>

							<section>
								<SectionHeader 
									title="Extensions List"
									buttonGroup={
										<>
										<Button 
												text="All" 
												isActive={activeTab === "All"}
												onClick={() => handleTabClick("All")}
											/>
											<Button 
												text="Active"
												isActive={activeTab === "Active"}
												onClick={() => handleTabClick("Active")}
											/>
											<Button 
												text="Inactive" 
												isActive={activeTab === "Inactive"}
												onClick={() => handleTabClick("Inactive")}
											/>
										</>
									}
								/>
								{ filteredCards.length > 0 ? (
										<GridContainer>
											{filteredCards.map((item) => (
												<Card 
													theme={theme} 
													id={item?.id}
													key={item?.shortName}
													title={item?.name}
													description={item?.description}
													logo={item?.icons ? (item.icons[2]?.url ?? item.icons[0]?.url) : ""}
													isCardActive={item?.enabled}
													onToggleActive={handleToggleActive}
													onRemoveClick={handleRemoveExtension}
												/>
											))}
										</GridContainer>
									) : (
										<EmptyState 
											icon={EmptyStateIcon}
											title="No Extensions Found!"
											subtitle="Come back and see the magic ✨"
											theme={theme}
										/>
									)
								}
							</section>
      </main>
    </>
  )
};

export default App;

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr); 
	gap: var(--spacing150);
	place-items: center;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr); 
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
