import React, { useEffect, useState } from 'react';
// 'https://www.understood-rabbits.surge.sh' html file
import DOMPurify from 'dompurify';

const HTMLContent = ({ html }) => {
    console.log('clean html :>> ', html);
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

const VanillaPage = () => {
    const [cleanHTML, setCleanHTML] = useState(null);

    const getHTML = async () => {
        const html = await fetch('http://www.understood-rabbits.surge.sh');
        console.log(`html`, html);
        const body = await html.text();
        console.log('body :>> ', body);
        const clean = DOMPurify.sanitize(body);
        setCleanHTML(clean);
    };
    useEffect(() => {
        getHTML();
    }, []);
    return (
        <div>
            VanillaPage.jsx
            {cleanHTML && <HTMLContent html={cleanHTML} />}
        </div>
    );
};

export default VanillaPage;
