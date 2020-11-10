class ToolTip {

}

class ProjectItem {

}

class ProjectList {
    projects = [];

    constructor(type) {
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        for (const prjItem of prjItems) {
            this.projects.push(new ProductItem(prjItem.id));
        }
    }
}

class App {
    static init() {
        const activeProjectList = new ProjectList('active')
        const finishedProjectList = new ProjectList('finished')
    }
}

App.init();



