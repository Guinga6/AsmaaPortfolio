import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import Education from "@/pages/Education";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import Certificates from "@/pages/Certificates";
import Resume from "@/pages/Resume";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/education" component={Education} />
      <Route path="/projects" component={Projects} />
      <Route path="/skills" component={Skills} />
      <Route path="/certificates" component={Certificates} />
      <Route path="/resume" component={Resume} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return <Router />;
}

export default App;
