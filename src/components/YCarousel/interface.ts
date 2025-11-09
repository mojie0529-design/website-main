interface DiffImageType {
    type: "diff",
    imgs: {
        src: string;
        tag?: string;
    }[]
}

interface NormalImageType {
    type: "normal",
    src: string;
    desc?: string | {
        title: string;
        content: string;
    }
}

interface ChangeImageType {
    type: "change",
    src: [{
        url: string;
        tag?: string;
    }, {
        url: string;
        tag?: string
    }]
}

export type ImageItem = DiffImageType | NormalImageType | ChangeImageType
