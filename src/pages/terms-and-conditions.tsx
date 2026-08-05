import type { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { cssSnippets } from "../styles/cssSnippets";
import { theme } from "../styles/theme";

const TermsWrapper = styled.div`
  min-height: 80vh;
  background-color: ${theme.colors.background};
  padding-top: 60px;
  padding-bottom: 100px;
  ${cssSnippets.padding}
`;

const ContentContainer = styled.article`
  max-width: 860px;
  margin: 0 auto;
  background-color: ${theme.colors.background_secondary};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid ${theme.colors.border_color};
  padding: 48px 40px;

  @media (max-width: ${theme.breakpoints.SM}px) {
    padding: 24px 18px;
    border-radius: 8px;
  }

  .header-section {
    border-bottom: 2px solid ${theme.colors.border_color};
    padding-bottom: 24px;
    margin-bottom: 36px;

    .subtitle {
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: ${theme.colors.primary};
      margin-bottom: 8px;
    }

    h1 {
      font-size: 36px;
      font-weight: 700;
      color: ${theme.colors.heading};
      margin: 0 0 16px 0;
      line-height: 1.2;

      @media (max-width: ${theme.breakpoints.SM}px) {
        font-size: 26px;
      }
    }

    .meta-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 16px 32px;
      background-color: ${theme.colors.gray};
      padding: 14px 20px;
      border-radius: 8px;
      margin-top: 20px;

      .meta-item {
        font-size: 14px;
        color: ${theme.colors.text_secondary};
        strong {
          color: ${theme.colors.heading};
          font-weight: 600;
        }
      }
    }
  }

  .content-body {
    color: ${theme.colors.text};
    font-size: 16px;
    line-height: 1.8;

    section {
      margin-bottom: 36px;

      h2 {
        font-size: 22px;
        font-weight: 700;
        color: ${theme.colors.heading};
        margin: 28px 0 14px 0;
        line-height: 1.35;
        border-left: 4px solid ${theme.colors.primary};
        padding-left: 12px;

        @media (max-width: ${theme.breakpoints.SM}px) {
          font-size: 19px;
        }
      }

      h3 {
        font-size: 18px;
        font-weight: 600;
        color: ${theme.colors.heading_secondary};
        margin: 20px 0 10px 0;
        line-height: 1.4;
      }

      p {
        margin: 0 0 16px 0;
        color: ${theme.colors.text_secondary};
      }

      ul {
        margin: 0 0 16px 0;
        padding-left: 24px;
        list-style-type: disc;

        li {
          margin-bottom: 8px;
          color: ${theme.colors.text_secondary};
        }
      }
    }
  }
`;

const TermsAndConditions: NextPage = () => {
  const isEn = process.env.NEXT_PUBLIC_LANGUAGE === "en";

  return (
    <Layout
      header={isEn ? "Terms and Conditions" : "ህጎች እና ሁኔታዎች"}
      headerTitle={isEn ? "Terms and Conditions - Living Way Ethiopia" : "ህጎች እና ሁኔታዎች - ህያው መንገድ ኢትዮጵያ"}
      headerDescription={
        isEn
          ? "Terms and Conditions governing access to and use of the Living Way mobile application."
          : "የህያው መንገድ ሞባይል መተግበሪያ የአጠቃቀም ህጎች እና ሁኔታዎች።"
      }
    >
      <TermsWrapper>
        <ContentContainer>
          <div className="header-section">
            <p className="subtitle">Living Way Mobile Application</p>
            <h1>{isEn ? "Terms and Conditions" : "የአጠቃቀም ህጎች እና ሁኔታዎች"}</h1>
            <div className="meta-grid">
              <div className="meta-item">
                <strong>Effective Date:</strong> September 12, 2026
              </div>
              <div className="meta-item">
                <strong>Governing Law:</strong> Federal Democratic Republic of Ethiopia
              </div>
            </div>
          </div>

          <div className="content-body">
            <section>
              <h2>1. Acceptance of These Terms</h2>
              <p>
                These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the Living Way mobile application, related features, content, notifications, and support services (collectively, the &quot;App&quot;). The App is operated for Living Way and its affiliated church organization (&quot;Living Way,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By downloading, accessing, browsing, registering for, or using the App, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, do not use the App.
              </p>
              <p>
                If you use the App on behalf of a church, organization, or other entity, you represent that you have authority to bind that entity to these Terms. The App is intended for personal, ministry, and community use; it is not a substitute for professional medical, mental-health, legal, financial, emergency, or pastoral care delivered in person.
              </p>
            </section>

            <section>
              <h2>2. Eligibility, Minors, and Guest Access</h2>
              <h3>2.1 Eligibility</h3>
              <p>
                You must be able to enter into a legally binding agreement under applicable law to create and manage an account. Where applicable law requires a parent or legal guardian to consent to a minor’s use of an online service, that parent or guardian must provide the consent and supervise the minor’s use.
              </p>

              <h3>2.2 Minors</h3>
              <p>
                Living Way expects parents or legal guardians normally to create or manage accounts for minors. A parent or guardian who creates, authorizes, or supervises a minor account accepts these Terms on the minor’s behalf and is responsible for the minor’s activity in the App.
              </p>

              <h3>2.3 Guest Accounts</h3>
              <p>
                You may access many App features as a guest. Some features, including voting in polls, require you to sign in with an account. Guest access does not create a right to every present or future feature, and we may modify guest functionality to protect users, maintain security, or comply with law.
              </p>
            </section>

            <section>
              <h2>3. Accounts and Google Sign-In</h2>
              <h3>3.1 Sign-In Method</h3>
              <p>
                Google Sign-In and Email/Password are currently the only supported account sign-in methods. You must provide accurate and current information and comply with Google’s applicable terms. We do not control Google or its services, and your use of Google Sign-In is also subject to Google’s own terms and privacy practices.
              </p>

              <h3>3.2 Account Security</h3>
              <p>
                You are responsible for protecting your device and Google account credentials and for activity occurring through your App account. Notify us promptly through the support channel made available in the App if you believe your account has been accessed without authorization. We may take reasonable steps to secure, suspend, or recover an account, but cannot guarantee that unauthorized access will never occur.
              </p>

              <h3>3.3 Profile Information</h3>
              <p>
                You may be able to provide a profile picture or other limited profile information. Profile pictures are intended to be visible only to you and authorized church administrators, except where a future feature expressly tells you otherwise. Do not upload images or information that you do not have the right to use or disclose.
              </p>
            </section>

            <section>
              <h2>4. Account Deletion, Suspension, and Termination</h2>
              <h3>4.1 Your Right to Delete</h3>
              <p>
                You may request deletion of your own account through the App or the support channel made available in the App. An authorized church administrator may also delete or deactivate accounts within the administrator’s scope. Deletion requests may require reasonable identity or authority verification.
              </p>

              <h3>4.2 Effect of Deletion</h3>
              <p>
                After a deletion request is processed, access to the account will end. Certain information may remain for a limited period in backups, logs, legal records, fraud-prevention systems, or where retention is required or permitted by law. The handling of personal information after deletion is further described in the Privacy Policy.
              </p>

              <h3>4.3 Our Rights</h3>
              <p>
                We may suspend, restrict, or terminate access to the App where we reasonably believe that you have violated these Terms, created risk for others, used the App unlawfully, or where suspension is necessary for security, maintenance, legal compliance, or protection of Living Way’s community. Where reasonable, we will explain the basis for action and provide an opportunity to address it.
              </p>
            </section>

            <section>
              <h2>5. Permitted Use and Community Conduct</h2>
              <p>
                You may use the App only for lawful purposes and in a respectful manner consistent with a faith-based community. You must not use the App to harm, exploit, intimidate, harass, defame, discriminate against, or threaten any person; to invade privacy; or to interfere with the App or another user’s access.
              </p>
              <ul>
                <li>do not submit unlawful, deceptive, obscene, hateful, violent, sexually exploitative, or infringing material;</li>
                <li>do not impersonate another person, misrepresent affiliation, create deceptive accounts, or attempt to obtain another user’s information;</li>
                <li>do not introduce malware, attempt unauthorized access, probe or disrupt systems, scrape data, reverse engineer except to the extent permitted by law, or bypass security controls;</li>
                <li>do not use the App for commercial solicitation, spam, fundraising, political campaigning, or advertising without our prior written permission;</li>
                <li>do not use polls, messages, or other features to manipulate, pressure, target, or harass users; and</li>
                <li>do not use the App in any way that violates Ethiopian law or any other law applicable to you.</li>
              </ul>
              <p>
                We may investigate suspected misuse and take the actions described in Section 4. Serious or immediate safety concerns should be directed to local emergency services or appropriate authorities; the App is not an emergency response service.
              </p>
            </section>

            <section>
              <h2>6. Content, Intellectual Property, and Third-Party Materials</h2>
              <h3>6.1 Living Way Content</h3>
              <p>
                The App, its software, design, text, audio, visual elements, branding, organization, and other materials provided by Living Way are protected by applicable intellectual-property laws. Subject to these Terms, we grant you a limited, personal, non-exclusive, non-transferable, revocable license to use the App for its intended purpose. No ownership rights are transferred to you.
              </p>

              <h3>6.2 Bible Resources and Third-Party Content</h3>
              <p>
                The App may include Bible resources, devotional materials, media, links, and other content owned by Living Way or supplied by third parties. Such content may be subject to additional copyright, license, attribution, or use restrictions. You must respect all notices and may not copy, redistribute, sell, modify, or exploit content except as expressly permitted by the rights holder or law.
              </p>

              <h3>6.3 Your Content</h3>
              <p>
                You retain any ownership rights you have in content you submit, such as a profile picture or a future message. You grant Living Way a limited, worldwide, non-exclusive, royalty-free license to host, store, reproduce, display, and process that content solely as needed to operate, secure, improve, and provide the App and its features. You represent that you have the rights needed to grant this license.
              </p>

              <h3>6.4 Feedback</h3>
              <p>
                If you provide suggestions, feedback, or ideas about the App, you grant us the right to use them without restriction or compensation, provided we do not identify you publicly without your permission.
              </p>
            </section>

            <section>
              <h2>7. Polls and Participation Features</h2>
              <p>
                Polls and similar participation features may be available only to authenticated users. You must vote only once per poll unless the App expressly permits otherwise, and you must not attempt to manipulate results through false accounts, automation, coercion, or other improper means. Living Way may correct, remove, close, or invalidate a poll where it reasonably believes integrity, security, or community standards have been compromised.
              </p>
            </section>

            <section>
              <h2>8. Notifications</h2>
              <p>
                The App may send push notifications and local notifications generated by the App’s business logic, including reminders, ministry updates, and feature-related information. You can manage many notification preferences through your device settings and, where available, within the App. You understand that device, network, operating-system, and third-party delivery conditions may prevent or delay notification delivery; notifications are not guaranteed.
              </p>
            </section>

            <section>
              <h2>9. Future One-to-One Support Messaging</h2>
              <p>
                Living Way may introduce one-to-one messaging between a user and a pastor or member of a support team (&quot;Support Messaging&quot;). If introduced, Support Messaging is intended for ministry support and ordinary community communication, not emergencies or confidential professional counseling. Messages will not be end-to-end encrypted, and authorized administrators may be able to view messages for safeguarding, supervision, security, quality, legal compliance, and administration.
              </p>
              <p>
                Support Messages may be retained for a limited period and automatically deleted in accordance with the then-current Privacy Policy, operational needs, or applicable law. Do not send highly sensitive information through Support Messaging, including emergency information, passwords, financial-account information, government identification numbers, or medical information requiring professional care. We may publish additional feature-specific rules before Support Messaging becomes available.
              </p>
            </section>

            <section>
              <h2>10. Privacy and Data Practices</h2>
              <p>
                Our Privacy Policy explains how we collect, use, store, share, and protect personal information. By using the App, you acknowledge that analytics is enabled and that diagnostic and crash information may be collected, including through Firebase Crashlytics. The App may use service providers and technology providers to deliver its features, host data, deliver media, improve performance, and provide analytics.
              </p>
              <p>
                Your use of the App is also subject to the privacy practices of providers involved in account authentication, analytics, crash reporting, cloud storage, image delivery, deployment, updates, and other services. Where a provider processes information on our behalf, we seek to use it in support of operating the App. For details and choices that may be available to you, review the Privacy Policy and the relevant provider notices.
              </p>
            </section>

            <section>
              <h2>11. Third-Party Services and Links</h2>
              <p>
                The App may rely on or link to third-party services, including Google Sign-In, Firebase services, cloud and content-delivery providers, app-update services, and external websites. Those services are not controlled by Living Way. We do not endorse and are not responsible for third-party content, availability, security, products, policies, or practices. Your use of third-party services is at your own discretion and subject to their applicable terms.
              </p>
            </section>

            <section>
              <h2>12. Availability, Changes, and Updates</h2>
              <p>
                We may modify, add, suspend, or discontinue any part of the App at any time, including features, content, eligibility rules, or technical requirements. We may install or require updates to maintain security, functionality, and compatibility. We will use reasonable efforts to provide notice of material changes where practical, but we do not guarantee uninterrupted or error-free operation.
              </p>
              <p>
                We may update these Terms from time to time. The current version will be made available in the App or through another reasonable channel. If a change is material, we will provide notice as required by applicable law. Continued use after the effective date of updated Terms constitutes acceptance to the extent permitted by law.
              </p>
            </section>

            <section>
              <h2>13. Disclaimers</h2>
              <p>
                THE APP IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, LIVING WAY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, AVAILABILITY, SECURITY, AND UNINTERRUPTED OR ERROR-FREE OPERATION.
              </p>
              <p>
                Without limiting the foregoing, Living Way does not guarantee the accuracy, completeness, availability, or suitability of devotional, educational, pastoral, community, Bible, third-party, or user-provided content. Any spiritual guidance or support made available through the App is not medical, mental-health, legal, financial, or emergency advice. You should seek qualified professional assistance when appropriate.
              </p>
            </section>

            <section>
              <h2>14. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, LIVING WAY, ITS AFFILIATES, CHURCH LEADERS, ADMINISTRATORS, VOLUNTEERS, EMPLOYEES, CONTRACTORS, AND SERVICE PROVIDERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOSS OF DATA, PROFITS, GOODWILL, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATED TO THE APP OR THESE TERMS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, LIVING WAY’S TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATED TO THE APP OR THESE TERMS WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID TO USE THE APP IN THE TWELVE MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM, OR (B) ONE HUNDRED ETHIOPIAN BIRR (ETB 100). Nothing in these Terms excludes liability that cannot lawfully be excluded or limited.
              </p>
            </section>

            <section>
              <h2>15. Indemnity</h2>
              <p>
                To the extent permitted by law, you will defend, indemnify, and hold harmless Living Way and its affiliates, church leaders, administrators, volunteers, employees, contractors, and service providers from claims, losses, liabilities, damages, costs, and expenses (including reasonable legal fees) arising from your misuse of the App, your violation of these Terms, your violation of another person’s rights, or your content. This obligation does not apply to the extent a claim results from Living Way’s own unlawful conduct.
              </p>
            </section>

            <section>
              <h2>16. Governing Law and Disputes</h2>
              <p>
                These Terms and any non-contractual obligations arising from or related to them are governed by the laws of the Federal Democratic Republic of Ethiopia, without regard to conflict-of-laws principles. Subject to any mandatory law that gives you a different forum or remedy, the courts with competent jurisdiction in Ethiopia will have exclusive jurisdiction over disputes arising from or related to these Terms or the App.
              </p>
              <p>
                Before starting formal proceedings, you agree to contact Living Way through the support channel made available in the App and give us a reasonable opportunity to address the concern. Nothing in this section prevents either party from seeking urgent interim or protective relief where legally available.
              </p>
            </section>

            <section>
              <h2>17. General Terms</h2>
              <h3>17.1 Entire Agreement</h3>
              <p>
                These Terms, together with the Privacy Policy and any feature-specific terms presented to you, form the entire agreement between you and Living Way concerning the App and supersede prior discussions or understandings about it.
              </p>

              <h3>17.2 Severability and Waiver</h3>
              <p>
                If any provision is held invalid or unenforceable, the remaining provisions will remain in effect to the fullest extent permitted by law. Our failure to enforce a provision is not a waiver of our right to enforce it later.
              </p>

              <h3>17.3 Assignment</h3>
              <p>
                You may not assign or transfer your rights or obligations under these Terms without our prior written consent. We may assign these Terms in connection with a reorganization, merger, transfer of assets, or operation of the App, subject to applicable law.
              </p>

              <h3>17.4 No Agency</h3>
              <p>
                These Terms do not create an employment, agency, partnership, joint venture, fiduciary, or franchise relationship between you and Living Way.
              </p>
            </section>

            <section>
              <h2>18. Contact Us</h2>
              <p>
                Questions, complaints, account-deletion requests, or notices concerning these Terms should be submitted through the support or contact channel made available in the Living Way App. Please include enough information for us to understand and respond to your request. For urgent safety matters, contact local emergency services or an appropriate authority rather than relying on the App.
              </p>
            </section>
          </div>
        </ContentContainer>
      </TermsWrapper>
    </Layout>
  );
};

export default TermsAndConditions;
