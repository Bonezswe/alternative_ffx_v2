import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Suspense } from "react";
import Loading from "./loading";

export default async function CharactersPageLayout({
    children,
    main,
    supporting,
}: {
    children: React.ReactNode
    main: React.ReactNode
    supporting: React.ReactNode
}) {
    return (
        <Tabs defaultValue="mainCharacters" className="text-center">
          <TabsList>
            <TabsTrigger value="mainCharacters">Main Characters</TabsTrigger>
            <TabsTrigger value="sideCharacters">Side Characters</TabsTrigger>
          </TabsList>
          <TabsContent value="mainCharacters">
            <Suspense fallback={<Loading />}>
                {main}
            </Suspense>
          </TabsContent>
          <TabsContent value="sideCharacters">
            <Suspense fallback={<Loading />}>
                {supporting}
            </Suspense>
          </TabsContent>
        </Tabs>
    );
}