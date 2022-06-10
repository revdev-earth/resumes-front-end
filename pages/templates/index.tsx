import Header from "../../components/Header";
import TemplateList from "../../components/TemplateList";
import { TemplatesContainer } from "./styles";

const Templates = () => {
	return (
		<>
			<Header />
			<TemplatesContainer>
				<h2>Templates</h2>
				<ul>
					<TemplateList />
					<TemplateList />
					<TemplateList />
					<TemplateList />
					<TemplateList />
					<TemplateList />
					<TemplateList />
					<TemplateList />
					<TemplateList />
					<TemplateList />
					<TemplateList />
					<TemplateList />
					<TemplateList />
					<TemplateList />
					<TemplateList />
					<TemplateList />
				</ul>
			</TemplatesContainer>
		</>
	);
};

export default Templates;