import PersonData from "../Assets/Data/en-US/PersonData";
import ProjectsData from "../Assets/Data/en-US/ProjectsData";
import MenuData from "../Assets/Data/en-US/MenuData";
import PersonDataPTBR from "../Assets/Data/pt-BR/PersonData";
import ProjectsDataPTBR from "../Assets/Data/pt-BR/ProjectsData";
import MenuDataPTBR from "../Assets/Data/pt-BR/MenuData";

export default class LanguageController {
    static instance : LanguageController;
    static language : string = "en-US";
    private personData : any;
    private projectData : any;
    private menuData: any;
    constructor(lang) {
        LanguageController.language = lang;
        LanguageController.instance = this;
        this.retrieveData(lang);
    }

    private retrieveData(language)
    {
        if(language === "en-US")
        {
            this.personData = PersonData.Person;
            this.projectData = ProjectsData.Projects;
            this.menuData = MenuData;
        } else
        if(language === "pt-BR")
        {
            this.personData = PersonDataPTBR.Person;
            this.projectData = ProjectsDataPTBR.Projects;
            this.menuData = MenuDataPTBR;
        }
    }

    changeLanguage() {
        if(LanguageController.language === "pt-BR")
        {
            LanguageController.language = "en-US";
            this.retrieveData(LanguageController.language);
        } else
        if(LanguageController.language === "en-US")
        {
            LanguageController.language = 'pt-BR';
            this.retrieveData(LanguageController.language);
        }

    }

    getPersonData() {
        return this.personData;
    }

    getProjectData() {
        return this.projectData;
    }

    getMenuData() {
        return this.menuData;
    }
    
}