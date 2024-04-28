import React from "react";
import Navbar from "../../Home/components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import FullCapsule from "../components/FullCapsule.jsx";
import { Tabs } from "flowbite-react";
import { HiGlobeEuropeAfrica } from "react-icons/hi2";
import { HiMiniBellAlert } from "react-icons/hi2";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

// Import placeholder images
import imgBatran from '../views/ICON_BATRAN.png'
import imgLove from '../views/ICON_LOVE.png'
import imgGraduate from '../views/ICON_STUDENT.png'
import imgMuzica from '../views/ICON_MUZICA.png'
import imgStudent from '../views/ICON_STUDENT.png'
import imgClassic from '../views/ICON_CLASSIC.png'

export default function Feed() {
  return (
    <>
      <Navbar transparent />
      <main className="flex flex-col"> {/* Flex column to manage children */}
        {/* Header section with background image, it's out of flex layout */}
        <div className="bg-cover bg-center text-center py-16 px-4" style={{ backgroundImage: "url('https://thuleediciones.com/wp-content/uploads/2020/01/zrson1mqwv.jpg')" }}>
          <h1 className="text-white font-semibold text-5xl">
            Your story starts with us.
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Embark on a journey through the passages of time as you explore your very own time capsule.
          </p>
        </div>

        {/* Tabs section with flex grow to take up all available space */}
        <section className="flex-grow">
          <div className="flex items-center justify-center h-full">
            <div className="text-center"> {/* This div centers the tabs */}
              <Tabs aria-label="Tabs with underline" style="underline">
                <Tabs.Item active title="Your Feed" icon={HiMiniMagnifyingGlass}>
                  <div className="mt-12">
                    <FullCapsule
                      imageSrc={imgBatran}
                      authorName="Grandpa Johnson"
                      authorEmail="grandpa@example.com"
                      contentText="Take a nostalgic trip down memory lane with Grandpa Johnson as he shares his life lessons and stories from the past."
                      category="Personal Stories"
                      date="10 Oct 2020"
                      title="Life Lessons from Grandpa"
                      authorAvatarUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      authorRole="Author"
                      capsuleText="Heartwarming stories and wisdom from a beloved grandpa."
                    />
                  </div>
                  <div className="mt-12">
                    <FullCapsule
                      imageSrc={imgLove}
                      authorName="Emma Johnson"
                      authorEmail="emma@timecapsule.com"
                      contentText="Learn about the history and significance of Valentine's Day traditions around the world."
                      category="Culture"
                      date="14 Feb 2020"
                      title="Valentine's Day Traditions"
                      authorAvatarUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      authorRole="Author"
                      capsuleText="Explore the customs and rituals of Valentine's Day."
                    />
                  </div>
                  <div className="mt-12">
                    <FullCapsule
                      imageSrc={imgStudent}
                      authorName="Alex Smith"
                      authorEmail="alex@example.com"
                      contentText="Learn about the challenges and opportunities of remote learning during the COVID-19 pandemic."
                      category="Education"
                      date="1 Sep 2020"
                      title="Remote Learning Strategies"
                      authorAvatarUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      authorRole="Author"
                      capsuleText="Strategies for success in online education."
                    />
                  </div>
                  <div className="mt-12">
                    <FullCapsule
                      imageSrc={imgClassic}
                      authorName="Maria Rodriguez"
                      authorEmail="maria@example.com"
                      contentText="Discover classic literature masterpieces and their enduring impact on society."
                      category="Literature"
                      date="20 Jan 2020"
                      title="Classic Literature"
                      authorAvatarUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      authorRole="Author"
                      capsuleText="A journey through the timeless classics of literature."
                    />
                  </div>
                </Tabs.Item>
                <Tabs.Item title="Upcoming Capsules" icon={HiMiniBellAlert}>

                </Tabs.Item>
                <Tabs.Item title="Events" icon={HiGlobeEuropeAfrica}>

                </Tabs.Item>
              </Tabs>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
