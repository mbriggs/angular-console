export interface NgTaskDefinition {
  type: 'shell';
  projectName?: string;
  architectName: string;
  flags?: string;
}

export interface ArchitectDef {
  builder: string;
  configurations?: {
    [configuration: string]: {};
  };
}

export interface ProjectDef {
  root: string;
  architect?: {
    [architectName: string]: ArchitectDef;
  };
}

export interface NamedProject extends ProjectDef {
  name: string;
}

export interface Projects {
  [projectName: string]: ProjectDef | undefined;
}

export interface AngularJson {
  projects: Projects;
}
