"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[906],{8126:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=s(5893),i=s(1151);const o={},r="Explore AI Models",l={id:"Explore-AI-Models",title:"Explore AI Models",description:"Before you begin this section, you must have completed the Setup to get the relevant access key.",source:"@site/docs/10-Explore-AI-Models.md",sourceDirName:".",slug:"/Explore-AI-Models",permalink:"/Workshop-Interact-with-OpenAI-models/Explore-AI-Models",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/Workshop-Interact-with-OpenAI-models/tree/main/docs/10-Explore-AI-Models.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/Workshop-Interact-with-OpenAI-models/Setup"},next:{title:"Understanding LLM's",permalink:"/Workshop-Interact-with-OpenAI-models/Understanding-LLMs"}},a={},d=[{value:"Deployed models available:",id:"deployed-models-available",level:2},{value:"About Embeddings",id:"about-embeddings",level:2},{value:"Which model should I use?",id:"which-model-should-i-use",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"explore-ai-models",children:"Explore AI Models"}),"\n",(0,n.jsx)(t.admonition,{title:"PRE-REQUISITE",type:"tip",children:(0,n.jsxs)(t.p,{children:["Before you begin this section, you ",(0,n.jsx)(t.strong,{children:"must have completed"})," the ",(0,n.jsx)(t.a,{href:"Setup",children:"Setup"})," to get the relevant access key."]})}),"\n",(0,n.jsx)(t.h2,{id:"deployed-models-available",children:"Deployed models available:"}),"\n",(0,n.jsx)(t.p,{children:"In this workshop we will"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"use"})," the ",(0,n.jsx)(t.code,{children:"gpt-35-turbo"})," model, a popular instance of the OpenAI GPT-3.5 model."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"mention"}),"  the ",(0,n.jsx)(t.code,{children:"gpt-4"})," model, the latest model from OpenAI though we won't be using it here."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Learn more about these models by visiting the ",(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/",children:"Azure OpenAI documentation"})," documentation."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/concepts/models",children:"Models"})," page lists currently available models, training cutoff dates & retirement dates"]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/quotas-limits",children:"Quotas and Limits"})," page tells you where models are available, and request limits (tokens-per-minute)."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Here's an example of what that data looks like for the 2 models we will focus on:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Model"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Availability"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Request Limit"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Training Data (up to)"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/concepts/models#gpt-35-models",children:"gpt-3.5-turbo (0613)"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"10 regions"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"4096 tokens"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Sep 2021"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/concepts/models#gpt-4-and-gpt-4-turbo-preview-models",children:"gpt-4 (0613)"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"9 regions"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"8192 tokens"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Sep 2021"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"about-embeddings",children:"About Embeddings"}),"\n",(0,n.jsx)(t.p,{children:"An embedding is a special format of data representation that machine learning models and algorithms can easily use. The embedding is an information dense representation of the semantic meaning of a piece of text. Each embedding is a vector of floating-point numbers, such that the distance between two embeddings in the vector space is correlated with semantic similarity between two inputs in the original format. For example, if two texts are similar, then their vector representations should also be similar. Embeddings power vector similarity search in Azure Databases such as Azure Cosmos DB for MongoDB vCore."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/concepts/understand-embeddings#embedding-models",children:"About Embedding models"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/concepts/models#embeddings",children:"Recommended Embedding model"})," is currently ",(0,n.jsx)(t.code,{children:"text-embedding-ada-002"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"which-model-should-i-use",children:"Which model should I use?"}),"\n",(0,n.jsx)(t.p,{children:"There are many considerations when choosing a model, including cost, availability, performance, and capability. As a general guide, we recommend the following:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Start with gpt-35-turbo."})," This model is very economical and has good performance. It's commonly used for chat applications (such as OpenAI's ChatGPT) but can be used for a wide range of tasks beyond chat and conversation."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Move to gpt-35-turbo-16k, gpt-4 or gpt-4-32k"})," if you need to generate more than 4,096 tokens, or need to support larger prompts. These models are more expensive and can be slower, and have limited availability, but they are the most powerful models available today. ",(0,n.jsx)(t.em,{children:"Find out more about tokens later on in this workshop."})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Consider an embeddings model"})," for tasks like search, clustering, recommendations and anomaly detection."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Use DALL-E (Preview) for generating images"})," - from text prompts that the user provides, unlike previous models where the output is text (chat)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Use Whisper (Preview) for speech-to-text"})," - typically used to transcribe audio files. The model is trained on a large dataset of English audio and text, and optimized for transcribing audio files with English speech though it can also transcribe speech in other languages. The model output is English text. Best for quickly transcribing audio files one at a time, translate audio from other languages into English or providing a prompt to the model to guide the output."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>r});var n=s(7294);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);