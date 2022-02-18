import React from 'react'

import { comic } from '../../utils/bulkImages'

const comics = [
    {
        img: comic.first,
        content: `The young man's mind wandered even though the other kids from the same academy were standing in front of him. "Come on, don't ask that to all teachers.", "That's right, you better study hard. You're the lowest rank, ain't you?", "Why don't you just use your time to improve your skills anyway?".
        \n
        This bullying is not the first time. The young man has always been received the same treatment from his fellow academy mates. He got it because he questioned their life. The young man wondered, why were they not given the opportunity to make something other than what was taught? What caused them to dislike the question so much?`,
    },
    {
        img: comic.second,
        content: `The young man felt the life he was living was so strange as if it had been arranged that changes are prohibited. He felt uneasy about his life. The way of life that he and those around him lived seemed absurd. Even so, along the road that he walked heavily. There were only people who seemed happy with their life. But the happiness felt fake. As if they wanted to hide their true identity behind a smile.
        \n
        Lost in his thoughts, the young man kept walking until he came across the river bank.`,
    },
    {
        img: comic.third,
        content: `The silence made him deep in thought about this world. His thoughts were so deep that he remembered the people around him. How they ridicule the young man's mind and people who showed their dislike to the point of doing evil. The strange feeling he felt began to turn bitter. That wasn't the life he wanted.`,
    },
    {
        img: comic.fourth,
        content: `The young man rose from his seat, ready to go home after feeling more relieved. Then his gaze stopped at a cardboard box. A brilliant idea crossed his mind. Maybe if he showed them what to do besides following what the adults told them to do, they'd understand, he thought.`,
    },
    {
        img: comic.fifth,
        content: `The young man went to the academy feeling both relieved and proud. He had made something new and it satisfied his heart. He felt calm, safe, and at ease in the box. It was like having a private room, he didn't have to think about people anymore.
        \n
        Wherever he walked, people couldn't take away their eyes on him. They all stared with gazes the young man could not understand. Even so, none of them showed the disdain he usually gets. Therefore the young man walked confidently to his class. Even his classmates stared at the young boy like everyone else along the street before. So the young man was sure, with this, he had shown new thing that could be done as he hoped back then.`,
    },
    {
        img: comic.sixth,
        content: `However, the young man did not expect what he did yesterday could be immediately followed by many people in the academy. Some people even call it a box-head.So, at this point is where the Headbox begins.`,
    },
]

export default function Content() {
    return (
        <div>
            {comics.map((comic) => {
                return (
                    <div className="flex odd:flex-row even:flex-row-reverse justify-center items-center my-36 gap-12">
                        <img src={comic.img} alt="" />
                        <p className="whitespace-pre-line text-neutral-700 font-inter leading-relaxed">{comic.content}</p>
                    </div>
                )
            })}
        </div>
    )
}
