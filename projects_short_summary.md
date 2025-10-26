\# Project Book



---



\# VidalSigns



An AI powered medical assistant that converts complex lab reports into simple, actionable explanations for patients, with an emphasis on secure HIPAA style handling of medical data.



Project impact and outcomes

The platform delivered a secure, scalable, and user friendly health insights assistant, empowering individuals and partner organizations with clear, accessible data.



Key metrics



\* 98% OCR accuracy on reports

\* <2s average AI response time

\* 100% HIPAA aligned data purge

\* 40% reduction in staff queries



From complexity to clarity



The client need



\* Individuals needed a simple way to understand dense, jargon filled lab reports without clinical expertise

\* Organizations such as gyms and clinics required a branded tool to offer self serve health education to their members

\* The solution had to be highly secure and HIPAA aligned to protect sensitive health data and preserve trust



How we met the need



\* Built an AI chat that ingests PDFs and images, extracts data via OCR, and provides clear contextual answers

\* Added a white label layer so partners can deploy a branded microsite with custom pricing and QR code access

\* Engineered a secure architecture with end to end encryption, role based access controls, detailed audit logs, and automated 24 hour data purging



Technical challenges we solved



\* Diverse lab templates

&nbsp; Solution: Implemented a multi pass OCR engine with image preprocessing and table and field detection to ensure reliable extraction from varied and low quality report formats

\* Safe medical explanations

&nbsp; Solution: Used a retrieval augmented generation model aligned with reputable medical sources, with a calibrated tone and consistent safety disclaimers

\* HIPAA grade privacy

&nbsp; Solution: Architected strong encryption, strict role based controls, audit logging, and an automated 24 hour file deletion policy



---



\# TextGPT



An AI text service for automated text generation and texting workflows, built to be white labeled and integrated for commercial use. Project delivered from concept to production in nine weeks.



Project impact and results

The platform met critical success criteria for performance, accuracy, and user experience, delivering a robust and scalable solution for automated knowledge retrieval.



Key metrics



\* <2 minutes end to end ingestion for a 10MB PDF

\* <1s vector retrieval at p95

\* 95% plus OCR accuracy on scans

\* 100% multi tenant data isolation



The challenge and the solution



The challenge



\* Critical knowledge was locked in unsearchable PDFs, especially low quality scans

\* Businesses needed a frictionless way for customers to get answers without installing apps or logging in

\* The system had to be fast, secure, and cost effective at scale



Our solution by CodeMyPixel



\* An end to end pipeline: upload then OCR then chunk then embed then RAG chat with citations

\* A dual product experience: TextGPT for personal use and IQR Codes for business with QR and SMS integration

\* A scalable, secure architecture using Supabase with row level security, pgvector, and serverless functions on Vercel



Key features for business edition IQR Codes



\* QR code management

\* Unified chat inbox and logs

\* Subscription and billing



Technical challenges and solutions



\* Extracting text from image based PDFs

&nbsp; Solution: Added OCR pre processing and heuristic cleanup before LLM parsing, plus retries and quality gates to improve accuracy on difficult scans

\* Sub second retrieval at scale

&nbsp; Solution: Tuned pgvector indexes, optimized batch writes, and used cosine similarity with filtered scopes and lightweight metadata caching

\* Strict multi tenant isolation

&nbsp; Solution: Designed an RLS enforced schema with service role segregation and scoped storage policies to keep organizational data strictly separated



---



\# Top Floor Trends



A complete web and content update focused on improving search visibility and user experience for the Top Floor Trends brand.



What we built



\* An AI pipeline that converts 180 minutes of footage into 20 plus short reels automatically, detecting viral moments, adding subtitles and effects, formatting and scheduling posts, and enabling one click cross posting

\* Google Ads API integration for programmatic campaign deployment, reducing publish time to under 60 seconds



Project impact



\* <60s Google Ads campaign creation time

\* 95% plus successful scheduled posts

\* <5 minutes setup time per video

\* <5% cron job failure rate



From challenge to solution



The challenge



\* Creators were bogged down by repetitive tasks such as clipping videos and designing thumbnails

\* Existing tools were siloed, causing inefficient workflows between editors, schedulers, and ad dashboards

\* Teams lacked a unified dashboard to track both organic and paid performance



Our solution



\* Built an end to end platform using AI for content analysis, clip generation, and thumbnail creation to automate tedious tasks

\* Integrated YouTube, TikTok, and Google Ads into a single dashboard for streamlined management and distribution

\* Developed a simplified ads wizard that suggests assets and dramatically reduces campaign setup time



Key features



\* AI content repurposing

\* Unified scheduling and media library

\* AI thumbnail studio



Technical challenges and solutions



\* Video repurposing latency

&nbsp; Solution: Implemented an asynchronous job queue, parallelized clip generation, and enabled incremental delivery with a fallback FFmpeg process for critical needs

\* API quotas and timeouts

&nbsp; Solution: Tuned upload timeouts and wrapped external calls with adaptive backoff to manage request rates gracefully

\* Concurrent cron job safety

&nbsp; Solution: Used transactional locking so a worker atomically claims a task and prevents duplicate processing



---



\# QuasarSEO plugin case study



Development and SEO optimization for a custom WordPress plugin that automates local content generation and improves search visibility.



The problem



\* Local businesses struggled to compete with paid ads that dominate search results

\* Creating thousands of unique localized landing pages manually was time consuming and inconsistent

\* Existing bulk post generators lacked deep integration with WordPress page builders



Our solution



\* Built QuasarSEO, a custom plugin that uses AI to generate thousands of unique SEO friendly posts

\* Integrated a keyword research module with real time metrics such as search volume, CPC, and trends

\* Enabled seamless Elementor integration so a single template can be populated with AI content

\* Implemented background processing to handle large scale content generation without server overload



Key features



\* Advanced keyword research with real time metrics and local sub location suggestions

\* Powerful bulk generation and custom prompt controls



Results



\* Dramatic increase in organic search visibility and impressions after a few weeks of use

\* Generated pages are visually consistent, brand aligned, and high quality



---



\# Onvyo ERP



A full ERP system developed from scratch with real time admin dashboards for HR, finance, lead, and customer management.



What we delivered



\* Real time dashboards for HR, finance, and sales operations

\* Scheduling and email reminders

\* A CPQ tool that automated lead generation and quotation workflows to boost sales efficiency



Live demo available on the client deployment



---



If you want, I can add the original case study links back in. Note that some links contain hyphen characters, so tell me if you prefer raw links restored or encoded links instead.



