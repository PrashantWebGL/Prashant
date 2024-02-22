import Image from "next/image";
import styles from "@/app/styles/common.module.css"

export default function CompanyInfo({ params }) {
    //console.log(params);
    const projectInfo = [
        {
            title: "Wondevari",
            project: [
                {
                    title: "Hummit-Marketplace for 3D models",
                    description: "3D Model marketplace where Modeler can publish 3D model and users can buy it. Had to handle different file types and problems with model orientation and appearance.We have created mockups for customers to check if they are willing to buy 3D viewer as a service",
                    link: "https://hummit.co/en",
                    techstack: [" three.js ", " NextJS ", " JavaScript ", " HTML5 ", " CAD "],
                },
            ],
        },
        {
            title: "Dassault Systems",
            project: [
                {
                    title: "eDrawings Desktop",
                    description: "This Application is free and has more than 6 million user base. CPP based code to display SolidWorks geometries for user. Evolved in developing new features and solved many user bugs",
                    link: "https://hummit.co/en",
                    techstack: [" CPP ", " C# ", " WPF ", " CAD "],
                },
                {
                    title: "SLDDRW to UDL converter",
                    description: "This converts SLDDRW, SLDPRT and SLDASM to the 3d experience platform on the web. The main work is reading SLD files using SolidWorks APIs converting it to .cga file to UDL files. Worked on Windows and Linux CPP.",
                    link: "https://hummit.co/en",
                    techstack: [" CPP ", " Linux ",],
                },
                {
                    title: "SolidWorks Sell",
                    description: "SolidWorks SELL is a three.js based online product configurator. Worked as a Full stack / MEAN stack application developer. Added features like custom light in graphics scene and solved bugs for this project",
                    link: "https://hummit.co/en",
                    techstack: [" Angular ", " three.js ", " js ", " Express ", " CAD ", " Node "],
                },
            ],
        },
        {
            title: "Siemens",
            project: [
                {
                    title: "Visualization component for Post hub",
                    description: "Converted GWT based application to three.js/angular based which are the latest technologies. Made changes in core files like obitcontrols.js and three.js and shaders. Added functionalities like mouse directed zoom, Model rotation using quaternion, custom pan function which will preserve rotation center which was not provided by three.js.",
                    link: "https://hummit.co/en",
                    techstack: [" three.js ", " Angularjs ", " JavaScript ", " Java ", " CAD ", " Maven ", " Rest ", " C# ", " CSS "],
                },
                {
                    title: "Additive manufacturing on web",
                    description: "Additive manufacturing is latest manufacturing technique. Creating printer build tray and generating slice file was previously on desktop only. Added REST APIs to do the same, developed an interface which will interact with NX. Europe based client is currently using this project to repair blade tip of airplanes.",
                    link: "https://hummit.co/en",
                    techstack: [" Java ", " Maven ", " C# ", " CAD ", " Rest APIs ",],
                },
            ],
        },
        {
            title: "ProtoTech Solutions",
            project: [
                {
                    title: "WebGL Exporter for PTC Creo 2.0",
                    description: "Exporter is used to export models from PTC Creo 2.0 to WebGL format which runs on browser. Traversed model B-Rep structure to get facets and tessellated the same to export it to WebGL. Different features are added like explosion, change color/texture at runtime, dynamic loading of parts etc.",
                    link: "https://hummit.co/en",
                    techstack: [" C++ ", " three.js ", " HTML5 ", " JavaScript ", " CSS ", " CAD "],
                },
                {
                    title: "3D-PDF Exporter for Autodesk Fusion 360 API",
                    description: "This Plugin exports models from Autodesk Fusion 360 to 3D PDF format. Traversed model to get facets and tessellated the same to export it to 3D PDF format. 3D PDF writer is already written into C# and challenge was to write a wrapper so that triangulation data will be pass to C# writer from the C++, CLI wrapper is used. This application won prize money from Autodesk",
                    link: "https://hummit.co/en",
                    techstack: [" C++ ", " C# ", "Fusion 360 API", " CAD "],
                },
            ],
        },
        {
            title: "CDAC",
            project: [
                {
                    title: "Solving CFD Equations on GPU using CUDA",
                    description: "During Internship, learned about parallel programming and CUDA, GPU Architecture. Solved burgers equation of computation fluid dynamics.",
                    link: "https://hummit.co/en",
                    techstack: [" C++ ", " CUDA ", " iText "],
                },
            ],
        },
    ];
    const title = decodeURI(params.title);
    let data = projectInfo.find((event) => { return event.title == title });
    let projectData = data.project;
    return (
        <section>
            <h1>{data.title}</h1>
            <br />
            <div>
            {
                projectData.map((item,index) => (
                    <div key={index}>
                        <h2 className={styles.project_data_heading} >{item.title} </h2>
                        <h3>{item.description}</h3>
                        
                        <h3>TechStack : {item.techstack}</h3>
                        <br />
                    </div>
                ))
            }
            </div>

            {/* <iframe
                id="inlineFrameExample"
                title="Inline Frame Example"
                width="500"
                height="400"
                allow="fullscreen"
                object-fit= "contain"
                src={data.project[0].link}>
            </iframe> */}
        </section>
    )
}