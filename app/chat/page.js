import { getConfig } from "@/lib/config";
import ChatView from "@/components/ChatView";

// This is a Server Component
export default function ChatPage() {
    const config = getConfig();

    return (
        <ChatView config={config} />
    );
}
