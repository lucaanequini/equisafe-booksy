import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

interface CardSectionProps {
    title: string,
    description: string,
    data: any[]
}

export const CardSection = ({ title, description, data }: CardSectionProps) => {
    return (
        <Card className="w-[600px]">
            <CardHeader>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {data.map((item) => (
                    <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <p>{item}</p>
                    </div>
                ))}
            </CardContent>
        </Card >
    )
}