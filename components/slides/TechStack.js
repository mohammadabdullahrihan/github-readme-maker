import React, { useEffect, useState } from "react";
import BadgeSelect from "../elements/buttons/BadgeSelect";
import NextButton from "../elements/buttons/NextButton";
import Pagination from "../elements/Pagination";
import { useGPRMStore } from "../mobx/GPRMcontext";
import Donate from "./Donate";
import { useObserver } from "mobx-react";

export default function TechStack({ back }) {
  const [isVisible, setIsVisible] = useState(false);
  const gprmStore = useGPRMStore();
  const [BadgeStyle, setBadgeStyle] = useState(gprmStore.data.badge_theme);
  useEffect(() => {
    gprmStore.data.badge_theme = BadgeStyle;
  }, [BadgeStyle]);
  return useObserver(() => (
    <>
      {isVisible ? (
        <Donate back={() => setIsVisible(false)} />
      ) : (
        <div className="flex flex-col items-center fade-on-appear">
          <button
            className="left-0 absolute m-10 opacity-80 hover:opacity-100 transition-all ease-in-out outline-none"
            onClick={back}
          >
            ◄ Go Back
          </button>
          <p className="w-full text-center text-3xl my-10 mt-20">
            Add Tech that you use
          </p>
          <div className="flex flex-col md:flex-row w-full">
            <div className="flex w-full md:w-6/12 justify-center items-center">
              <img
                src="/girlonpc.svg"
                alt=""
                className="md:w-8/12 aspect-square select-none pointer-events-none"
                draggable="false"
              />
            </div>
            <div className="flex flex-col w-full md:w-6/12">
              {/* NOT USING ANY DATA FILE TO POPULATE BADGES */}
              <div className="flex flex-col h-full items-center">
                {/* Languages */}
                <p className="flex justify-center text-lg md:text-xl">
                  LANGUAGES
                </p>
                <div className="flex flex-row flex-wrap text-gray-700 md:justify-center">
                  <BadgeSelect
                    label="APACHE GROOVY"
                    url={
                      "![Apache Groovy](https://img.shields.io/badge/Apache%20Groovy-4298B8.svg?style=for-the-badge&logo=Apache+Groovy&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="C"
                    url={
                      "![C](https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="C#"
                    url={
                      "![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="C++"
                    url={
                      "![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="CRYSTAL"
                    url={
                      "![Crystal](https://img.shields.io/badge/crystal-%23000000.svg?style=for-the-badge&logo=crystal&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="CSS"
                    url={
                      "![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="CLOJURE"
                    url={
                      "![Clojure](https://img.shields.io/badge/Clojure-%23Clojure.svg?style=for-the-badge&logo=Clojure&logoColor=Clojure)"
                    }
                  />
                  <BadgeSelect
                    label="DART"
                    url={
                      "![Dart](https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="ELIXIR"
                    url={
                      "![Elixir](https://img.shields.io/badge/elixir-%234B275F.svg?style=for-the-badge&logo=elixir&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="ELM"
                    url={
                      "![Elm](https://img.shields.io/badge/Elm-60B5CC?style=for-the-badge&logo=elm&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="ERLANG"
                    url={
                      "![Erlang](https://img.shields.io/badge/Erlang-white.svg?style=for-the-badge&logo=erlang&logoColor=a90533)"
                    }
                  />
                  <BadgeSelect
                    label="FORTRAN"
                    url={
                      "![Fortran](https://img.shields.io/badge/Fortran-%23734F96.svg?style=for-the-badge&logo=fortran&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="GO"
                    url={
                      "![Go](https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="GRAPHQL"
                    url={
                      "![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="HASKELL"
                    url={
                      "![Haskell](https://img.shields.io/badge/Haskell-5e5086?style=for-the-badge&logo=haskell&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="HTML5"
                    url={
                      "![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="JAVA"
                    url={
                      "![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="JAVASCRIPT"
                    url={
                      "![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)"
                    }
                  />
                  <BadgeSelect
                    label="JULIA"
                    url={
                      "	![Julia](https://img.shields.io/badge/-Julia-9558B2?style=for-the-badge&logo=julia&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="KOTLIN"
                    url={
                      "![Kotlin](https://img.shields.io/badge/kotlin-%230095D5.svg?style=for-the-badge&logo=kotlin&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="LATEX"
                    url={
                      "![LaTeX](https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="LUA"
                    url={
                      "![Lua](https://img.shields.io/badge/lua-%232C2D72.svg?style=for-the-badge&logo=lua&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="MARKDOWN"
                    url={
                      "![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="NIM"
                    url={
                      "![Nim](https://img.shields.io/badge/nim-%23FFE953.svg?style=for-the-badge&logo=nim&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="OCTAVE"
                    url={
                      "![Octave](https://img.shields.io/badge/OCTAVE-darkblue?style=for-the-badge&logo=octave&logoColor=fcd683)"
                    }
                  />
                  <BadgeSelect
                    label="PHP"
                    url={
                      "![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="PERL"
                    url={
                      "![Perl](https://img.shields.io/badge/perl-%2339457E.svg?style=for-the-badge&logo=perl&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="PYTHON"
                    url={
                      "![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)"
                    }
                  />
                  <BadgeSelect
                    label="R"
                    url={
                      "![R](https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="RUBY"
                    url={
                      "![Ruby](https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="RUST"
                    url={
                      "![Rust](https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="SCALA"
                    url={
                      "![Scala](https://img.shields.io/badge/scala-%23DC322F.svg?style=for-the-badge&logo=scala&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="SHELL SCRIPT"
                    url={
                      "![Shell Script](https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="SOLIDITY"
                    url={
                      "![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="SWIFT"
                    url={
                      "![Swift](https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="TYPESCRIPT"
                    url={
                      "![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="ZIG"
                    url={
                      "![Zig](https://img.shields.io/badge/Zig-%23F7A41D.svg?style=for-the-badge&logo=zig&logoColor=white)"
                    }
                  />
                </div>
                {/* Hosting/SaaS */}
                <p className="flex justify-center text-lg md:text-xl mt-4">
                  HOSTING/SaaS
                </p>
                <div className="flex flex-row flex-wrap text-gray-700 md:justify-center">
                  <BadgeSelect
                    label="AWS"
                    url={
                      "![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="AZURE"
                    url={
                      "![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=azure-devops&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="CLOUDFLARE"
                    url={
                      "![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="CODEBERG"
                    url={
                      "![Codeberg](https://img.shields.io/badge/Codeberg-2185D0?style=for-the-badge&logo=Codeberg&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="DATADOG"
                    url={
                      "![Datadog](https://img.shields.io/badge/datadog-%23632CA6.svg?style=for-the-badge&logo=datadog&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="DIGITALOCEAN"
                    url={
                      "![DigitalOcean](https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="FIREBASE"
                    url={
                      "![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)"
                    }
                  />
                  <BadgeSelect
                    label="GLITCH"
                    url={
                      "![Glitch](https://img.shields.io/badge/glitch-%233333FF.svg?style=for-the-badge&logo=glitch&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="GOOGLE CLOUD"
                    url={
                      "![Google Cloud](https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="HEROKU"
                    url={
                      "![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="NETLIFY"
                    url={
                      "![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)"
                    }
                  />
                  <BadgeSelect
                    label="ORACLE"
                    url={
                      "![Oracle](https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="OPENSTACK"
                    url={
                      "![OpenStack](https://img.shields.io/badge/Openstack-%23f01742.svg?style=for-the-badge&logo=openstack&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="SCALEWAY"
                    url={
                      "![Scaleway](https://img.shields.io/badge/SCALEWAY-%234f0599.svg?style=for-the-badge&logo=scaleway&logoColor=white)"
                    }
                  />
                  <BadgeSelect
                    label="VERCEL"
                    url={
                      "![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center text-green-100">
            {/* FRAMEWORKS, PLATFORMS & LIBRARIES */}
            <p className="flex justify-center text-lg md:text-xl mt-4">
              FRAMEWORKS, PLATFORMS & LIBRARIES
            </p>
            <div className="flex flex-row flex-wrap text-gray-700 md:justify-center w-full md:w-10/12">
              <BadgeSelect
                label=".NET"
                url={
                  "![.Net](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white)"
                }
              />
              <BadgeSelect
                label="ADONISJS"
                url={
                  "![AdonisJS](https://img.shields.io/badge/adonisjs-%23220052.svg?style=for-the-badge&logo=adonisjs&logoColor=white)"
                }
              />
              <BadgeSelect
                label="ANACONDA"
                url={
                  "![Anaconda](https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white)"
                }
              />
              <BadgeSelect
                label="ANGULAR"
                url={
                  "![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)"
                }
              />
              <BadgeSelect
                label="ANGULAR.JS"
                url={
                  "![Angular.js](https://img.shields.io/badge/angular.js-%23E23237.svg?style=for-the-badge&logo=angularjs&logoColor=white)"
                }
              />
              <BadgeSelect
                label="ANT DESIGN"
                url={
                  "![Ant-Design](https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white)"
                }
              />
              <BadgeSelect
                label="APOLLO-GRAPHQL"
                url={
                  "![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)"
                }
              />
              <BadgeSelect
                label="AURELIA"
                url={
                  "![Aurelia](https://img.shields.io/badge/aurelia-%23ED2B88.svg?style=for-the-badge&logo=aurelia&logoColor=fff)"
                }
              />
              <BadgeSelect
                label="BOOTSTRAP"
                url={
                  "![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)"
                }
              />
              <BadgeSelect
                label="BUEFY"
                url={
                  "![Buefy](https://img.shields.io/badge/Buefy-7957D5?style=for-the-badge&logo=buefy&logoColor=48289E)"
                }
              />
              <BadgeSelect
                label="CHAKRA"
                url={
                  "![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white)"
                }
              />
              <BadgeSelect
                label="CHART.JS"
                url={
                  "![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)"
                }
              />
              <BadgeSelect
                label="CODE-IGNITER"
                url={
                  "![Code-Igniter](https://img.shields.io/badge/CodeIgniter-%23EF4223.svg?style=for-the-badge&logo=codeIgniter&logoColor=white)"
                }
              />
              <BadgeSelect
                label="DJANGO"
                url={
                  "![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)"
                }
              />
              <BadgeSelect
                label="DJANGO REST"
                url={
                  "![DjangoREST](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray)"
                }
              />
              <BadgeSelect
                label="ELECTRON.JS"
                url={
                  "![Electron.js](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white)"
                }
              />
              <BadgeSelect
                label="EMBER"
                url={
                  "![Ember](https://img.shields.io/badge/ember-1C1E24?style=for-the-badge&logo=ember.js&logoColor=#D04A37)"
                }
              />
              <BadgeSelect
                label="EXPO"
                url={
                  "![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)"
                }
              />
              <BadgeSelect
                label="EXPRESS.JS"
                url={
                  "![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)"
                }
              />
              <BadgeSelect
                label="FASTAPI"
                url={
                  "![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)"
                }
              />
              <BadgeSelect
                label="FASTIFY"
                url={
                  "![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)"
                }
              />
              <BadgeSelect
                label="FLASK"
                url={
                  "![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)"
                }
              />
              <BadgeSelect
                label="FLUTTER"
                url={
                  "![Flutter](https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white)"
                }
              />
              <BadgeSelect
                label="GATSBY"
                url={
                  "![Gatsby](https://img.shields.io/badge/Gatsby-%23663399.svg?style=for-the-badge&logo=gatsby&logoColor=white)"
                }
              />
              <BadgeSelect
                label="GREEN SOCK"
                url={
                  "![Green Sock](https://img.shields.io/badge/green%20sock-88CE02?style=for-the-badge&logo=greensock&logoColor=white)"
                }
              />
              <BadgeSelect
                label="GULP"
                url={
                  "![Gulp](https://img.shields.io/badge/GULP-%23CF4647.svg?style=for-the-badge&logo=gulp&logoColor=white)"
                }
              />
              <BadgeSelect
                label="INSOMNIA"
                url={
                  "![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)"
                }
              />
              <BadgeSelect
                label="JASMINE"
                url={
                  "![Jasmine](https://img.shields.io/badge/jasmine-%238A4182.svg?style=for-the-badge&logo=jasmine&logoColor=white)"
                }
              />
              <BadgeSelect
                label="JQUERY"
                url={
                  "![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)"
                }
              />
              <BadgeSelect
                label="JWT"
                url={
                  "![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)"
                }
              />
              <BadgeSelect
                label="LARAVEL"
                url={
                  "![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white)"
                }
              />
              <BadgeSelect
                label="LESS"
                url={
                  "![Less](https://img.shields.io/badge/less-2B4C80?style=for-the-badge&logo=less&logoColor=white)"
                }
              />
              <BadgeSelect
                label="MUI"
                url={
                  "![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white)"
                }
              />
              <BadgeSelect
                label="METEORJS"
                url={
                  "![Meteor JS](https://img.shields.io/badge/meteorjs-%23d74c4c.svg?style=for-the-badge&logo=meteor&logoColor=white)"
                }
              />
              <BadgeSelect
                label="NPM"
                url={
                  "![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)"
                }
              />
              <BadgeSelect
                label="NESTJS"
                url={
                  "![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)"
                }
              />
              <BadgeSelect
                label="NEXTJS"
                url={
                  "![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)"
                }
              />
              <BadgeSelect
                label="NODE.JS"
                url={
                  "![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)"
                }
              />
              <BadgeSelect
                label="NUXT"
                url={
                  "![NuxtJS](https://img.shields.io/badge/Nuxt-black?style=for-the-badge&logo=nuxt.js&logoColor=white)"
                }
              />
              <BadgeSelect
                label="OPENGL"
                url={
                  "![OpenCV](https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white)"
                }
              />
              <BadgeSelect
                label="P5.JS"
                url={
                  "![p5js](https://img.shields.io/badge/p5.js-ED225D?style=for-the-badge&logo=p5.js&logoColor=FFFFFF)"
                }
              />
              <BadgeSelect
                label="PUG"
                url={
                  "![Pug](https://img.shields.io/badge/Pug-FFF?style=for-the-badge&logo=pug&logoColor=A86454)"
                }
              />
              <BadgeSelect
                label="QT"
                url={
                  "![Qt](https://img.shields.io/badge/Qt-%23217346.svg?style=for-the-badge&logo=Qt&logoColor=white)"
                }
              />
              <BadgeSelect
                label="QUASAR"
                url={
                  "[Quasar](https://img.shields.io/badge/Quasar-16B7FB?style=for-the-badge&logo=quasar&logoColor=black)"
                }
              />
              <BadgeSelect
                label="ROS"
                url={
                  "![ROS](https://img.shields.io/badge/ros-%230A0FF9.svg?style=for-the-badge&logo=ros&logoColor=white)"
                }
              />
              <BadgeSelect
                label="RAILS"
                url={
                  "![Rails](https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white)"
                }
              />
              <BadgeSelect
                label="IOS"
                url={
                  "![IOS](https://img.shields.io/badge/IOS-%2320232a.svg?style=for-the-badge&logo=apple&logoColor=white)"
                }
              />
              <BadgeSelect
                label="ANDROID"
                url={
                  "![ANDROID](https://img.shields.io/badge/android-%2320232a.svg?style=for-the-badge&logo=android&logoColor=%a4c639)"
                }
              />
              <BadgeSelect
                label="REACT"
                url={
                  "![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)"
                }
              />
              <BadgeSelect
                label="REACT NATIVE"
                url={
                  "![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)"
                }
              />
              <BadgeSelect
                label="REACT ROUTER"
                url={
                  "![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)"
                }
              />
              <BadgeSelect
                label="REDUX"
                url={
                  "![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)"
                }
              />
              <BadgeSelect
                label="RXDB"
                url={
                  "![RxDB](https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white)"
                }
              />
              <BadgeSelect
                label="RXJS"
                url={
                  "![RxJS](https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white)"
                }
              />
              <BadgeSelect
                label="SASS"
                url={
                  "![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)"
                }
              />
              <BadgeSelect
                label="SEMANTIC UI REACT"
                url={
                  "![Semantic UI React](https://img.shields.io/badge/Semantic%20UI%20React-%2335BDB2.svg?style=for-the-badge&logo=SemanticUIReact&logoColor=white)"
                }
              />
              <BadgeSelect
                label="SOCKET.IO"
                url={
                  "![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)"
                }
              />
              <BadgeSelect
                label="SPRING"
                url={
                  "![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)"
                }
              />
              <BadgeSelect
                label="STRAPI"
                url={
                  "![Strapi](https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white)"
                }
              />
              <BadgeSelect
                label="STYLED COMPONENTS"
                url={
                  "![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)"
                }
              />
              <BadgeSelect
                label="STYLUS"
                url={
                  "![Stylus](https://img.shields.io/badge/stylus-%23ff6347.svg?style=for-the-badge&logo=stylus&logoColor=white)"
                }
              />
              <BadgeSelect
                label="SVELTE"
                url={
                  "![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white)"
                }
              />
              <BadgeSelect
                label="SYMFONY"
                url={
                  "![Symfony](https://img.shields.io/badge/symfony-%23000000.svg?style=for-the-badge&logo=symfony&logoColor=white)"
                }
              />
              <BadgeSelect
                label="TAILWINDCSS"
                url={
                  "![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)"
                }
              />
              <BadgeSelect
                label="THREEJS"
                url={
                  "![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)"
                }
              />
              <BadgeSelect
                label="THYMELEAF"
                url={
                  "![Thymeleaf](https://img.shields.io/badge/Thymeleaf-%23005C0F.svg?style=for-the-badge&logo=Thymeleaf&logoColor=white)"
                }
              />
              <BadgeSelect
                label="TYPE-QRAPHQL"
                url={
                  "![Type-graphql](https://img.shields.io/badge/-TypeGraphQL-%23C04392?style=for-the-badge)"
                }
              />
              <BadgeSelect
                label="VUE.JS"
                url={
                  "![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)"
                }
              />
              <BadgeSelect
                label="VUETIFY"
                url={
                  "![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF)"
                }
              />
              <BadgeSelect
                label="WEBPACK"
                url={
                  "![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)"
                }
              />
              <BadgeSelect
                label="XAMARIN"
                url={
                  "![Xamarin](https://img.shields.io/badge/Xamarin-3199DC?style=for-the-badge&logo=xamarin&logoColor=white)"
                }
              />
              <BadgeSelect
                label="YARN"
                url={
                  "![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)"
                }
              />
            </div>
            {/* SERVERS */}
            <p className="flex justify-center text-lg md:text-xl mt-4">
              SERVERS
            </p>
            <div className="flex flex-row flex-wrap text-gray-700 md:justify-center  w-full md:w-10/12">
              <BadgeSelect
                label="APACHE"
                url={
                  "![Apache](https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white)"
                }
              />
              <BadgeSelect
                label="APACHE AIRFLOW"
                url={
                  "![Apache Airflow](https://img.shields.io/badge/Apache%20Airflow-017CEE?style=for-the-badge&logo=Apache%20Airflow&logoColor=white)"
                }
              />
              <BadgeSelect
                label="APACHE ANT"
                url={
                  "![Apache Ant](https://img.shields.io/badge/Apache%20Ant-A81C7D?style=for-the-badge&logo=Apache%20Ant&logoColor=white)"
                }
              />
              <BadgeSelect
                label="APACHE FLINK"
                url={
                  "![Apache Flink](https://img.shields.io/badge/Apache%20Flink-E6526F?style=for-the-badge&logo=Apache%20Flink&logoColor=white)"
                }
              />
              <BadgeSelect
                label="APACHE MAVEN"
                url={
                  "![Apache Maven](https://img.shields.io/badge/Apache%20Maven-C71A36?style=for-the-badge&logo=Apache%20Maven&logoColor=white)"
                }
              />
              <BadgeSelect
                label="JENKINS"
                url={
                  "![Jenkins](https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white)"
                }
              />
              <BadgeSelect
                label="NGINX"
                url={
                  "![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)"
                }
              />
            </div>
            {/* DATABASES */}
            <p className="flex justify-center text-lg md:text-xl mt-4">
              DATABASES
            </p>
            <div className="flex flex-row flex-wrap text-gray-700 md:justify-center  w-full md:w-10/12">
              <BadgeSelect
                label="AMAZON DYNAMODB"
                url={
                  "![AmazonDynamoDB](https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white)"
                }
              />
              <BadgeSelect
                label="CASSANDRA"
                url={
                  "![ApacheCassandra](https://img.shields.io/badge/cassandra-%231287B1.svg?style=for-the-badge&logo=apache-cassandra&logoColor=white)"
                }
              />
              <BadgeSelect
                label="COCKROACH LABS"
                url={
                  "![CockroachLabs](https://img.shields.io/badge/Cockroach%20Labs-6933FF?style=for-the-badge&logo=Cockroach%20Labs&logoColor=white)"
                }
              />
              <BadgeSelect
                label="COUCHBASE"
                url={
                  "![Couchbase](https://img.shields.io/badge/Couchbase-EA2328?style=for-the-badge&logo=couchbase&logoColor=white)"
                }
              />
              <BadgeSelect
                label="MARIADB"
                url={
                  "![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)"
                }
              />
              <BadgeSelect
                label="MUSICBRAINZ"
                url={
                  "![MusicBrainz](https://img.shields.io/badge/Musicbrainz-EB743B?style=for-the-badge&logo=musicbrainz&logoColor=BA478F)"
                }
              />
              <BadgeSelect
                label="MICROSOFT SQL SERVER"
                url={
                  "![MicrosoftSQLServer](https://img.shields.io/badge/Microsoft%20SQL%20Sever-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white)"
                }
              />
              <BadgeSelect
                label="MONGODB"
                url={
                  "![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)"
                }
              />
              <BadgeSelect
                label="MYSQL"
                url={
                  "![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)"
                }
              />
              <BadgeSelect
                label="NEO4J"
                url={
                  "	![Neo4J](https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white)"
                }
              />
              <BadgeSelect
                label="POSTGRES"
                url={
                  "![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)"
                }
              />
              <BadgeSelect
                label="REALM"
                url={
                  "![Realm](https://img.shields.io/badge/Realm-39477F?style=for-the-badge&logo=realm&logoColor=white)"
                }
              />
              <BadgeSelect
                label="REDIS"
                url={
                  "![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)"
                }
              />
              <BadgeSelect
                label="SINGLE STORE"
                url={
                  "![Single Store](https://img.shields.io/badge/Single%20Store-AA00FF?style=for-the-badge&logo=singlestore&logoColor=white)"
                }
              />
              <BadgeSelect
                label="SQLITE"
                url={
                  "![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)"
                }
              />
              <BadgeSelect
                label="SUPABASE"
                url={
                  "	![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)"
                }
              />
            </div>
            {/* DESIGN */}
            <p className="flex justify-center text-lg md:text-xl mt-4">
              DESIGN
            </p>
            <div className="flex flex-row flex-wrap text-gray-700 md:justify-center  w-full md:w-10/12">
              <BadgeSelect
                label="ADOBE AFTER EFFECTS"
                url={
                  "![Adobe After Effects](https://img.shields.io/badge/Adobe%20After%20Effects-9999FF.svg?style=for-the-badge&logo=Adobe%20After%20Effects&logoColor=white)"
                }
              />
              <BadgeSelect
                label="ADOBE AUDITION"
                url={
                  "![Adobe Audition](https://img.shields.io/badge/Adobe%20Audition-9999FF.svg?style=for-the-badge&logo=Adobe%20Audition&logoColor=white)"
                }
              />
              <BadgeSelect
                label="ADOBE DREAMWEAVER"
                url={
                  "![Adobe Dreamweaver](https://img.shields.io/badge/Adobe%20Dreamweaver-FF61F6.svg?style=for-the-badge&logo=Adobe%20Dreamweaver&logoColor=white)"
                }
              />
              <BadgeSelect
                label="ADOBE ILLUSTRATOR"
                url={
                  "![Adobe Illustrator](https://img.shields.io/badge/adobeillustrator-%23FF9A00.svg?style=for-the-badge&logo=adobeillustrator&logoColor=white)"
                }
              />
              <BadgeSelect
                label="ADOBE INDESIGN"
                url={
                  "![Adobe InDesign](https://img.shields.io/badge/Adobe%20InDesign-49021F?style=for-the-badge&logo=adobeindesign&logoColor=white)"
                }
              />
              <BadgeSelect
                label="ADOBE LIGHTROOM"
                url={
                  "![Adobe Lightroom](https://img.shields.io/badge/Adobe%20Lightroom-31A8FF.svg?style=for-the-badge&logo=Adobe%20Lightroom&logoColor=white)"
                }
              />
              <BadgeSelect
                label="ADOBE PHOTOSHOP"
                url={
                  "![Adobe Photoshop](https://img.shields.io/badge/adobephotoshop-%2331A8FF.svg?style=for-the-badge&logo=adobephotoshop&logoColor=white)"
                }
              />
              <BadgeSelect
                label="ADOBE PREMIER PRO"
                url={
                  "![Adobe Premiere Pro](https://img.shields.io/badge/Adobe%20Premiere%20Pro-9999FF.svg?style=for-the-badge&logo=Adobe%20Premiere%20Pro&logoColor=white)"
                }
              />
              <BadgeSelect
                label="ADOBE XD"
                url={
                  "![Adobe XD](https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6)"
                }
              />
              <BadgeSelect
                label="ASEPRITE"
                url={
                  "![Aseprite](https://img.shields.io/badge/Aseprite-FFFFFF?style=for-the-badge&logo=Aseprite&logoColor=#7D929E)"
                }
              />
              <BadgeSelect
                label="AFFINITY DESIGN"
                url={
                  "![Affinity Designer](https://img.shields.io/badge/affinitydesginer-%231B72BE.svg?style=for-the-badge&logo=affinity-designer&logoColor=white)"
                }
              />
              <BadgeSelect
                label="BLENDER"
                url={
                  "![Blender](https://img.shields.io/badge/blender-%23F5792A.svg?style=for-the-badge&logo=blender&logoColor=white)"
                }
              />
              <BadgeSelect
                label="CANVA"
                url={
                  "![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white)"
                }
              />
              <BadgeSelect
                label="DRIBBLE"
                url={
                  "![Dribbble](https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white)"
                }
              />
              <BadgeSelect
                label="FIGMA"
                url={
                  "	![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)"
                }
              />
              <BadgeSelect
                label="FRAMER"
                url={
                  "![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)"
                }
              />
              <BadgeSelect
                label="GIMP"
                url={
                  "![Gimp Gnu Image Manipulation Program](https://img.shields.io/badge/Gimp-657D8B?style=for-the-badge&logo=gimp&logoColor=FFFFFF)"
                }
              />
              <BadgeSelect
                label="INKSCAPE"
                url={
                  "![Inkscape](https://img.shields.io/badge/Inkscape-e0e0e0?style=for-the-badge&logo=inkscape&logoColor=080A13)"
                }
              />
              <BadgeSelect
                label="KRITA"
                url={
                  "![Krita](https://img.shields.io/badge/Krita-203759?style=for-the-badge&logo=krita&logoColor=EEF37B)"
                }
              />
              <BadgeSelect
                label="PROTO.IO"
                url={
                  "![Proto.io](https://img.shields.io/badge/Proto.io-161637?style=for-the-badge&logo=proto.io&logoColor=00e5ff)"
                }
              />
              <BadgeSelect
                label="SKETCH"
                url={
                  "![Sketch](https://img.shields.io/badge/Sketch-FFB387?style=for-the-badge&logo=sketch&logoColor=black)"
                }
              />
            </div>
            {/* ML/DL */}
            <p className="flex justify-center text-lg md:text-xl mt-4">ML/DL</p>
            <div className="flex flex-row flex-wrap text-gray-700 md:justify-center w-full md:w-10/12">
              <BadgeSelect
                label="KERAS"
                url={
                  "![Keras](https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white)"
                }
              />
              <BadgeSelect
                label="NUMPY"
                url={
                  "![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white)"
                }
              />
              <BadgeSelect
                label="PANDAS"
                url={
                  "![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)"
                }
              />
              <BadgeSelect
                label="PLOTLY"
                url={
                  "![Plotly](https://img.shields.io/badge/Plotly-%233F4F75.svg?style=for-the-badge&logo=plotly&logoColor=white)"
                }
              />
              <BadgeSelect
                label="PYTORCH"
                url={
                  "![PyTorch](https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white)"
                }
              />
              <BadgeSelect
                label="SCIKIT-LEARN"
                url={
                  "![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)"
                }
              />
              <BadgeSelect
                label="SCIPY"
                url={
                  "![SciPy](https://img.shields.io/badge/SciPy-%230C55A5.svg?style=for-the-badge&logo=scipy&logoColor=%white)"
                }
              />
              <BadgeSelect
                label="TENSORFLOW"
                url={
                  "![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white)"
                }
              />
            </div>
            {/* OTHER */}
            <p className="flex justify-center text-lg md:text-xl mt-4">OTHER</p>
            <div className="flex flex-row flex-wrap text-gray-700 md:justify-center w-full md:w-10/12 mb-10">
              <BadgeSelect
                label="ALFRED"
                url={
                  "![Alfred](https://img.shields.io/badge/alfred-%235C1F87.svg?style=for-the-badge&logo=alfred)"
                }
              />
              <BadgeSelect
                label="ANSIBLE"
                url={
                  "![Ansible](https://img.shields.io/badge/ansible-%231A1918.svg?style=for-the-badge&logo=ansible&logoColor=white)"
                }
              />
              <BadgeSelect
                label="AQUA"
                url={
                  "![AquaSec](https://img.shields.io/badge/aqua-%231904DA.svg?style=for-the-badge&logo=aqua&logoColor=#0018A8)"
                }
              />
              <BadgeSelect
                label="ARDUINO"
                url={
                  "![Arduino](https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white)"
                }
              />
              <BadgeSelect
                label="BABEL"
                url={
                  "![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)"
                }
              />
              <BadgeSelect
                label="CMAKE"
                url={
                  "![CMake](https://img.shields.io/badge/CMake-%23008FBA.svg?style=for-the-badge&logo=cmake&logoColor=white)"
                }
              />
              <BadgeSelect
                label="CODECOV"
                url={
                  "![CodeCov](https://img.shields.io/badge/codecov-%23ff0077.svg?style=for-the-badge&logo=codecov&logoColor=white)"
                }
              />
              <BadgeSelect
                label="CONFLUENCE"
                url={
                  "![Confluence](https://img.shields.io/badge/confluence-%23172BF4.svg?style=for-the-badge&logo=confluence&logoColor=white)"
                }
              />
              <BadgeSelect
                label="DOCKER"
                url={
                  "![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)"
                }
              />
              <BadgeSelect
                label="ESLINT"
                url={
                  "![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)"
                }
              />
              <BadgeSelect
                label="ELASTICSEARCH"
                url={
                  "![ElasticSearch](https://img.shields.io/badge/-ElasticSearch-005571?style=for-the-badge&logo=elasticsearch)"
                }
              />
              <BadgeSelect
                label="GRADLE"
                url={
                  "![Gradle](https://img.shields.io/badge/Gradle-02303A.svg?style=for-the-badge&logo=Gradle&logoColor=white)"
                }
              />
              <BadgeSelect
                label="JIRA"
                url={
                  "![Jira](https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white)"
                }
              />
              <BadgeSelect
                label="KUBERNETES"
                url={
                  "![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)"
                }
              />
              <BadgeSelect
                label="NOTION"
                url={
                  "![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)"
                }
              />
              <BadgeSelect
                label="PORTFOLIO"
                url={
                  "![Portfolio](https://img.shields.io/badge/Portfolio-%23000000.svg?style=for-the-badge&logo=firefox&logoColor=#FF7139)"
                }
              />
              <BadgeSelect
                label="POSTMAN"
                url={
                  "![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)"
                }
              />
              <BadgeSelect
                label="PREZI"
                url={
                  "![Prezi](https://img.shields.io/badge/Prezi-%23000000.svg?style=for-the-badge&logo=Prezi&logoColor=white)"
                }
              />
              <BadgeSelect
                label="RANCHER"
                url={
                  "![Rancher](https://img.shields.io/badge/rancher-%230075A8.svg?style=for-the-badge&logo=rancher&logoColor=white)"
                }
              />
              <BadgeSelect
                label="RASPBERRYPI"
                url={
                  "![Raspberry Pi](https://img.shields.io/badge/-RaspberryPi-C51A4A?style=for-the-badge&logo=Raspberry-Pi)"
                }
              />
              <BadgeSelect
                label="SWAGGER"
                url={
                  "![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)"
                }
              />
              <BadgeSelect
                label="TERRAFORM"
                url={
                  "![Terraform](https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white)"
                }
              />
              <BadgeSelect
                label="TRELLO"
                url={
                  "![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)"
                }
              />
              <BadgeSelect
                label="VAGRANT"
                url={
                  "![Vagrant](https://img.shields.io/badge/vagrant-%231563FF.svg?style=for-the-badge&logo=vagrant&logoColor=white)"
                }
              />
            </div>
          </div>
          {/* Select Badge Type (with preview) */}
          <div className="flex flex-row flex-wrap justify-center items-center border p-2 px-4 border-green-300/50 rounded-md mb-6">
            Theme:
            <select
              id="badgestyle"
              value={
                gprmStore.data.badge_theme
                  ? gprmStore.data.badge_theme
                  : "for-the-badge"
              }
              onChange={() =>
                setBadgeStyle(document.getElementById("badgestyle").value)
              }
              className="bg-transparent py-1 px-2 outline-none w-max"
            >
              <option value="for-the-badge" className="bg-zinc-900">
                For the badge
              </option>
              <option value="flat" className="bg-zinc-900">
                Flat
              </option>
              <option value="flat-square" className="bg-zinc-900">
                Flat Square
              </option>
              <option value="plastic" className="bg-zinc-900">
                Plastic
              </option>
              {/* Social style is not enabled as it is not compatible with all badges */}
              {/* <option value="social" className="bg-zinc-900">
                Social
              </option> */}
            </select>
            <img
              src={`https://img.shields.io/badge/Preview-1ED760?style=${BadgeStyle}&logo=spotify&logoColor=white`}
              alt=""
              className="w-max max-w-xs ml-4"
            />
          </div>
          <NextButton onClick={() => setIsVisible(true)} />
          <Pagination val={4} />
        </div>
      )}
    </>
  ));
}
