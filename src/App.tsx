import "./index.css";
import { Button, Header, SwitchButton} from "./components";
import { usePreferredTheme } from "./utils";

function App() {
  const { theme, setTheme } = usePreferredTheme();
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
								/>

								<SwitchButton />
							</section>
      </main>
    </>
  )
}

export default App
