import EmailList from "@/components/emails/EmailList"
import EmailSettings from "@/components/settings/EmailSettings"
import { motion } from "framer-motion"

export default function PersonalAccountPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-8">
      <section>
        <motion.h2
          className="text-xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Emails
        </motion.h2>
        <p className="mt-1 text-sm text-gray-500">
          Emails you can use to sign in to your account.
        </p>

        <div className="mt-4">
          <EmailList />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Email settings</h2>
        <p className="mt-1 text-sm text-gray-500">
          Configure how emails are used in relation to your account.
        </p>
        <div className="mt-4">
          <EmailSettings />
        </div>
      </section>
    </main>
  )
}
