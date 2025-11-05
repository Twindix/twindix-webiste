import { WhatsTwindixHero, WhatsTwindixOriginsAndInspiration, WhatsTwindixUnderstandingManagement } from "@/components";

export default function WhatsTwindix() {
    return (
        <div>
            <WhatsTwindixHero />
            <div className="container m-auto relative">
                <WhatsTwindixOriginsAndInspiration />
                <WhatsTwindixUnderstandingManagement />
            </div>
        </div>

    );
}
