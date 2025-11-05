import { WhatsTwindixHero, WhatsTwindixOriginsInspiration, WhatsTwindixUnderstandingManagement } from "@/components";

export default function WhatsTwindix() {
    return (
        <div>
            <WhatsTwindixHero />
            <div className="container m-auto relative">
                <WhatsTwindixOriginsInspiration />
                <WhatsTwindixUnderstandingManagement />
            </div>
        </div>

    );
}
