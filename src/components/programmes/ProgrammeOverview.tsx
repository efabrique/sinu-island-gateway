import { useLocation, useParams } from "react-router-dom";
import { Card, CardContent } from "../ui/card";

const ProgrammeOverview = () => {
    const { state } = useLocation();
    let programme_title = "";
    const { programme_name, programme_description, programme_year } = state || {};
    const name = programme_name?.toLowerCase();

    if (name?.includes("diploma")) {
        programme_title = "Diploma";
    } else if (name?.includes("certificate")) {
        programme_title = "Certificate";
    } else {
        programme_title = "Program";
    }
    return (
        <Card className="w-full mb-8 shadow-lg border border-gray-200">
            <CardContent>
                <section id="programme-overview" className="w-full">
                    <div className="max-w-5xl mx-auto px-4 py-8">
                        <h2 className="text-3xl md:text-3xl font-bold text-[#222222] mb-6">
                            {programme_title} Description
                        </h2>
                        <h2 className="text-2xl md:text-2xl text-blue-600/60 mb-6">
                            {programme_name} at Solomon Islands National University
                        </h2>
                        <p className="text-[#082952] mb-4">
                            {programme_description}
                        </p>
                        <p className="text-[#082952] mb-4">
                            Our programmes are designed to provide students with a comprehensive education that combines theoretical knowledge with practical skills. Each programme is carefully crafted to meet industry standards and prepare students for successful careers in their chosen fields.
                        </p>
                    </div>
                </section>
            </CardContent>
        </Card>

    );
}

export default ProgrammeOverview;