import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export default function TimerPresets() {
    return (
       <div className="w-full flex justify-center p-6">

        <ButtonGroup>
            <Button variant="outline" size="lg" className="text-lg">
                10
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
                30
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
                60
            </Button>
        </ButtonGroup>
    </div>
    )
}