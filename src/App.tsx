import "./index.css";
import { Button, Card, Header, SwitchButton} from "./components";
import { usePreferredTheme } from "./utils";
import { useState } from "react";
import { DevLensLogo } from "./assets";

function App() {
  const { theme, setTheme } = usePreferredTheme();
		const [isButtonActive, setIsButtonActive] = useState<boolean>(false);

		const handleButtonActive = () => {
			setIsButtonActive(prev => !prev)
		};
		
  return (
    <>
      <main>
							<Header 
									setTheme={setTheme}
									theme={theme}
							/>

							<section>
								<Button 
									theme={theme}
									text="Click me"
									isButtonActive={isButtonActive}
									handleClick={handleButtonActive}
								/>

								<SwitchButton />

								<Card 
									theme={theme} 
									title="DevLens"
									description="Quickly inspect page layouts and visualize element boundaries."
									logo={DevLensLogo}
								/>
							</section>
      </main>
    </>
  )
}

export default App
