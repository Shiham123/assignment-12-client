import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import SectionTitle from '../../SubSection/SectionTitle';
import { useEffect, useState } from 'react';

const FaqSection = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    fetch('/faq.json')
      .then((response) => response.json())
      .then((data) => setFaqData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <SectionTitle heading="Faq" subHeading="Why you choose us?" />
      <div className="max-w-screen-2xl mx-auto px-4 pt-16">
        <div className="mx-auto rounded-lg bg-colorThree p-2">
          {faqData.map((item, index) => {
            const { answer, question } = item;
            return (
              <Disclosure key={index}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-colorFive px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-colorThree duration-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                      <span className="text-colorFour font-bold text-xl md:text-2xl lg:text-3xl font-cinzel py-8 tracking-widest capitalize">
                        {question}
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm md:text-xl lg:text-2xl text-colorFour font-poppins my-12 leading-10 tracking-wider">
                      {answer}
                      questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
