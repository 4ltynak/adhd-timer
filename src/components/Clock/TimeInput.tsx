import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function TimeInput() {
    return (
        <div className="w-3/4 mx-auto">
        <div className="flex justify-center">
            <Card size="lg" className="mx-auto w-1/2 max-w-xs">
                <CardHeader>
                    <CardTitle className="flex justify-center text-center font-bold">
                        10
                    </CardTitle>
                </CardHeader>
            </Card>
            <span className="text-bold p-4">:</span>
                <Card size="lg" className="mx-auto w-1/2 max-w-xs">
                <CardHeader>
                    <CardTitle className="flex justify-center text-center font-bold">
                        10
                    </CardTitle>
                </CardHeader>
            </Card>
        </div>
        
        </div>
    )
}