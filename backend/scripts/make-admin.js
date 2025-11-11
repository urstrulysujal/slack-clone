import "dotenv/config";
import { StreamChat } from "stream-chat";

const serverClient = StreamChat.getInstance(
  process.env.STREAM_API_KEY,
  process.env.STREAM_API_SECRET
);

async function makeAdmin() {
  await serverClient.updateUser({
    id: "user_356ru9ujtcaatTpOGwikHwuAkQt",
    role: "admin"
  });

  console.log("✅ Admin role updated successfully!");
  process.exit(0);
}

makeAdmin().catch(err => {
  console.error("❌ Error updating admin role:", err);
  process.exit(1);
});
