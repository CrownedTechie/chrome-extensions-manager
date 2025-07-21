import "./index.css";
import { Button, Card, Header, SectionHeader } from "./components";
import { usePreferredTheme } from "./utils";
import styled from "styled-components";
import { data } from "./data";
import { useState } from "react";

	interface UpdateQueryParams {
		key: string;
		value: string | null;
	};

function App() {
	const searchParams = new URLSearchParams(window.location.search);
	const query = searchParams.get("tab") || "All";
	const [activeTab, setActiveTab] = useState<string>(query);
	const [extensionData, setExtensionData] = useState(data);
	const { theme, setTheme } = usePreferredTheme();
		
		const updateQuery = (
			key: UpdateQueryParams["key"], 
			value: UpdateQueryParams["value"]
		) => {
			if (value) {
				searchParams.set(key, value);
			} else {
				searchParams.delete(key);
			}
			window.history.pushState({}, "", `${window.location.pathname}?${searchParams}`);
		};

		const handleTabClick = (tab: string) => {
			setActiveTab(tab);
			updateQuery("tab", tab);
		};

	const handleToggleActive = (title: string, newState: boolean) => {
		setExtensionData(prevData => 
			prevData.map(item => 
				item.name === title 
					? { ...item, isActive: newState }
					: item
			)
		);
	};

	const handleRemoveExtension = (title: string) => {
		setExtensionData(prevData => 
			prevData.filter(item => item.name !== title )
		)
	};

		const activeCards = extensionData.filter(item => item.isActive);
		const inactiveCards = extensionData.filter(item => !item.isActive);
		const filteredCards = {
			All: extensionData,
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
								<GridContainer>
									{filteredCards.map((item, index) => (
										<Card 
											theme={theme} 
											id={`${item.name}-${index}`}
											key={item.name}
											title={item.name}
											description={item.description}
											logo={item.logo}
											isCardActive={item.isActive}
											onToggleActive={handleToggleActive}
											onRemoveClick={handleRemoveExtension}
										/>
									))}
								</GridContainer>
							</section>
      </main>
    </>
  )
}

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