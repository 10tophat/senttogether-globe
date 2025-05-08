import { useState } from 'react';

export default function SoutheastAsiaUpdates() {
  const [activeTab, setActiveTab] = useState('work');

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-red-100 px-4 py-10 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-2xl w-full border-2 border-red-300">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-sky-600">Sent Together</h1>
          
        </div>

        <div className="flex justify-center mb-6 gap-4">
          <button
            onClick={() => setActiveTab('work')}
            className={`px-6 py-3 text-lg font-bold rounded-full border-2 shadow-sm transition duration-200 \${activeTab === 'work' ? 'bg-sky-200 text-red-700 border-red-500' : 'bg-white text-gray-600 border-gray-300 hover:bg-sky-50'}`}
          >
            The Work
          </button>
          <button
            onClick={() => setActiveTab('together')}
            className={`px-6 py-3 text-lg font-bold rounded-full border-2 shadow-sm transition duration-200 \${activeTab === 'together' ? 'bg-sky-200 text-red-700 border-red-500' : 'bg-white text-gray-600 border-gray-300 hover:bg-sky-50'}`}
          >
            Sent Together
          </button>
        </div>

        {activeTab === 'work' && (
          <div className="text-gray-700 text-md md:text-lg space-y-4">
            <p>
              My team and I will be working alongside local missionaries who are already working with people in the area.
              We will be sent two by two just like in <strong>Luke 10</strong> out to people groups with unknown access to the Gospel.
            </p>
            <p>
              Our job will be to find these people, share the Gospel, and along the way track the presence of believers in each area.
              The goal is for us to begin relationships with nonbelievers so that the long term missionaries and local believers can
              cultivate deeper more consistent relationships where one day Jesus becomes Lord over all.
            </p>
          </div>
        )}

        {activeTab === 'together' && (
          <div className="text-gray-700 text-md md:text-lg space-y-4">
            <p>
              I am excited to share that this summer, I’ll be heading to Southeast Asia.
              While I've already raised the necessary funds, I would love for you to be sent with me
              through consistent prayers as well as updates throughout the time I am overseas.
            </p>
            <p>
              I’ll be sending out updates about what God is doing, how you can be praying, and
              how the team and I are navigating this mission. Your support through prayer is incredibly valuable to me.
            </p>
            <p className="font-semibold text-red-700">Here’s how you can pray even now:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Pray</strong> that the hearts of the people we will interact with would be softened.</li>
              <li><strong>Pray</strong> for my team—that we would trust each other and work well together.</li>
              <li><strong>Pray</strong> for me—that I would prepare well, both physically and spiritually, and that my heart would be broken for what breaks His.</li>
            </ul>

            <div className="pt-6">
              <form
                action="https://gmail.us8.list-manage.com/subscribe/post?u=8e0a94dacb8486409653f88be&amp;id=7b0169a433&amp;f_id=0010c0e1f0"
                method="post"
                target="_blank"
                className="flex flex-col gap-4"
              >
                <label htmlFor="mce-EMAIL" className="text-sm font-medium text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  required
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="you@example.com"
                />
                <button
                  type="submit"
                  className="bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-red-700 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}