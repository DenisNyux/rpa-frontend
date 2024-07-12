"use client";
import { FC } from "react";
import Image from "next/image";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import LineSeparatedHeader from "@/components/SharedComponents/LineSeparatedHeader/LineSeparatedHeader";

import { SingleSection } from "@/types/SectionsType";

type TabsSectionProps = {
  sectionTabs: SingleSection["attributes"]["sectionTabs"];
  sectionTabsView: boolean;
};

const TabsSection: FC<TabsSectionProps> = ({
  sectionTabs,
  sectionTabsView,
}) => {
  switch (sectionTabsView) {
    case true:
      return (
        <div className="mb-8">
          <Tabs>
            <TabList className="border-b border-[rgb(229, 231, 235)] flex gap-1 overflow-x-auto">
              {sectionTabs &&
                sectionTabs.map((tab) => {
                  return (
                    <Tab
                      key={tab.id}
                      className="border-[rgb(229, 231, 235)] text-m whitespace-nowrap	 font-bold border-solid border border-b-0 rounded-[5px] bg-transparent p-2	"
                    >
                      {tab.tabTitle}
                    </Tab>
                  );
                })}
            </TabList>

            {sectionTabs &&
              sectionTabs.map((tab) => {
                return (
                  <TabPanel key={tab.id}>
                    {tab.tabContent && (
                      <BlocksRenderer
                        content={tab.tabContent}
                        blocks={{
                          image: ({ image }) => {
                            return (
                              <Image
                                src={image.url}
                                width={image.width}
                                height={image.height}
                                alt={image.alternativeText || ""}
                              />
                            );
                          },
                          paragraph: ({ children }) => (
                            <p className="text-base">{children}</p>
                          ),
                          list: ({ children, format }) => {
                            switch (format) {
                              case "unordered":
                                return (
                                  <ul className="list-disc	ml-8">{children}</ul>
                                );
                              case "ordered":
                                return (
                                  <ol className="list-decimal ml-8">
                                    {children}
                                  </ol>
                                );
                              default:
                                return <p>{children}</p>;
                            }
                          },
                          link: ({ children, url }) => (
                            <a href={url} className="text-[#5e050d] ">
                              <u>{children}</u>
                            </a>
                          ),
                        }}
                        modifiers={{
                          bold: ({ children }) => (
                            <strong className="text-base">{children}</strong>
                          ),
                          italic: ({ children }) => (
                            <span className="italic">{children}</span>
                          ),
                        }}
                      />
                    )}
                  </TabPanel>
                );
              })}
          </Tabs>
        </div>
      );
    case false:
      return (
        <div className="mb-8">
          {sectionTabs &&
            sectionTabs.map((tab) => {
              return (
                <div key={tab.id} className="mb-4">
                  <LineSeparatedHeader
                    headerTitle={tab.tabTitle}
                    headerColor="#5e050d"
                  />
                  {tab.tabContent && (
                    <BlocksRenderer
                      content={tab.tabContent}
                      blocks={{
                        image: ({ image }) => {
                          return (
                            <Image
                              src={image.url}
                              width={image.width}
                              height={image.height}
                              alt={image.alternativeText || ""}
                            />
                          );
                        },
                        paragraph: ({ children }) => (
                          <>
                            <p className="text-base">{children}</p>
                            <br></br>
                          </>
                        ),
                        list: ({ children, format }) => {
                          switch (format) {
                            case "unordered":
                              return (
                                <ul className="list-disc ml-8">{children}</ul>
                              );
                            case "ordered":
                              return (
                                <ol className="list-decimal ml-8">
                                  {children}
                                </ol>
                              );
                            default:
                              return <p>{children}</p>;
                          }
                        },
                        link: ({ children, url }) => (
                          <a href={url} className="text-[#5e050d] ">
                            <u>{children}</u>
                          </a>
                        ),
                      }}
                      modifiers={{
                        bold: ({ children }) => (
                          <strong className="text-base">{children}</strong>
                        ),
                        italic: ({ children }) => (
                          <span className="italic">{children}</span>
                        ),
                      }}
                    />
                  )}
                </div>
              );
            })}
        </div>
      );
    default:
      return null;
  }
};

export default TabsSection;
