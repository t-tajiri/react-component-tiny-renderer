import { lazy, Suspense } from "react";
import { CompA } from "./components/CompA";
const CompB = lazy(() => import("./components/CompB").then(module => ({ default: module.CompB })));


type Props = {
  componentName: string
} 
export const ComponentNode: React.VFC<Props> = ({ componentName }: Props) => {
  const nodes = [
    { "name": "compA", "node": <CompA /> },
    { "name": "compB", "node": <CompB /> },
  ];

  const activeNode = nodes.filter(node => node.name === componentName)[0];

  return (
    <Suspense fallback={"loading"}>  
      { activeNode.node }
    </Suspense>
  );
};