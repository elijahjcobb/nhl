import { Shell } from "../components/shell"
import { FaAccusoft } from "react-icons/fa"


export default function Page() {
  return <Shell
    nav={{
      title: "Home",
      actionIcon: FaAccusoft,
      onActionTap: () => {
        console.log("CLICK")
      }
    }}
  >
    <div style={{ height: '300vh' }}>oij</div>
  </Shell>
}
