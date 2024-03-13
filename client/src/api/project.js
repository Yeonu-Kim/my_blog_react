import data from "./data/project.json";

function getProjectList() {
    console.log(data.project_list);
}

function getProject(project_id) {
    const target = data.project_list.filter((project) => {
        return project["id"] === project_id;
    });
    console.log(target);

    return target;
}

export default { getProjectList, getProject };