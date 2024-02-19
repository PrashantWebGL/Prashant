import "@/app/components/companycard.css"

export default async function CompanyCard() {
    const list = [
        {
            title: "Wondevari"
        },
        {
            title: "Dassault Systems"
        },
        {
            title: "Siemens"
        },
        {
            title: "ProtoTech Soltions"
        },
        {
            title: "CDAC"
        },
        {
            title: "Personal Projects"
        }
    ];

    //let data =  props.props;
    return (
        <div className="companycard-parent">
            {
                list.map((item, index) => (

                    <section className="companycard" key={index}><h1>{item.title}</h1></section>

                ))
            }
        </div>
    )
}