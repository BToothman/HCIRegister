export interface Course {
    id: number;
    title: string;
    teacher: Teacher;
    school: School;
    degree: boolean;
    offered: Offered;
    prereq: number[];
    grade: string;
    enrolled: boolean;
    available: boolean;
}

export interface Teacher {
    name: string;
}

export interface School {
    name: string;
}

export interface Semester {
    description: string;
}

export interface Offered {
    time: number;
    days: string[];
    semester: Semester;
}

export interface Annoucement {
    date: string;
    text: string;
}
