export interface ToolsMenu {
    title: string;
    desc: string;
    link: string;

}

export const toolsMenu: ToolsMenu[] = [
    {
        title : 'Image to PDF',
        desc : 'Convert Image (.jpg, .jpeg, & .png) to PDF',
        link : '/imgConverter',
    },
    {
        title: 'Docs to PDF',
        desc : 'Convert Word (.doc & .docx) to PDF',
        link : '#',
    },
    {
        title: 'Excel to PDF',
        desc : 'Convert Excel (.xls & .xlsx) to PDF',
        link : '#',
    },
    {
        title: 'Edit PDF',
        desc : 'add Sign and edit PDF',
        link : '#',
    },
]