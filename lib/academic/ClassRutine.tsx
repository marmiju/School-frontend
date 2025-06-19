import React from 'react';
interface ClassRutine {
    class: string;
    group?: string;
    url: string | File;
}

const ClassRutine = () => {
    const classRutine: ClassRutine[] = [
        {
            "class": "ষষ্ঠ শ্রেণী",
            "url": "https://docs.google.com/document/d/1aaaaaaa/export?format=pdf"
        },
        {
            "class": "সপ্তম শ্রেণী",
            "url": "https://docs.google.com/document/d/2bbbbbbb/export?format=pdf"
        },
        {
            "class": "অষ্টম শ্রেণী",
            "url": "https://docs.google.com/document/d/3ccccccc/export?format=pdf"
        },
        {
            "class": "নবম শ্রেণী",
            "group": "বিজ্ঞান",
            "url": "https://docs.google.com/document/d/4ddddddd/export?format=pdf"
        },
        {
            "class": "নবম শ্রেণী",
            "group": "মানবিক",
            "url": "https://docs.google.com/document/d/5eeeeeee/export?format=pdf"
        },
        {
            "class": "নবম শ্রেণী",
            "group": "ব্যবসায় শিক্ষা",
            "url": "https://docs.google.com/document/d/6fffffff/export?format=pdf"
        },
        {
            "class": "দশম শ্রেণী",
            "group": "বিজ্ঞান",
            "url": "https://docs.google.com/document/d/7ggggggg/export?format=pdf"
        },
        {
            "class": "দশম শ্রেণী",
            "group": "মানবিক",
            "url": "https://docs.google.com/document/d/8hhhhhhh/export?format=pdf"
        }
    ]

    return classRutine
};

export default ClassRutine;