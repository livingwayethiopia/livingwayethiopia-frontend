import type { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { cssSnippets } from "../styles/cssSnippets";
import { theme } from "../styles/theme";

const PrivacyWrapper = styled.div`
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

const PrivacyPolicy: NextPage = () => {
  const isEn = process.env.NEXT_PUBLIC_LANGUAGE === "en";

  return (
    <Layout
      header={isEn ? "Privacy Policy" : "የግላዊነት ፖሊሲ"}
      headerTitle={isEn ? "Privacy Policy - Living Way Ethiopia" : "የግላዊነት ፖሊሲ - ህያው መንገድ ኢትዮጵያ"}
      headerDescription={
        isEn
          ? "Privacy Policy explaining how Living Way collects, uses, and protects personal information."
          : "ህያው መንገድ የግል መረጃዎችን እንዴት እንደሚሰበስብ እና እንደሚጠብቅ የሚገልጽ የግላዊነት ፖሊሲ።"
      }
    >
      <PrivacyWrapper>
        <ContentContainer>
          <div className="header-section">
            <p className="subtitle">Living Way Mobile Application</p>
            <h1>{isEn ? "Privacy Policy" : "የግላዊነት ፖሊሲ"}</h1>
            <div className="meta-grid">
              <div className="meta-item">
                <strong>Effective Date:</strong> September 12, 2026
              </div>
            </div>
            <p className="mt-4 text-sm italic text-gray-600">
              This Policy explains how Living Way handles personal information.
            </p>
          </div>

          <div className="content-body">
            <section>
              <h2>1. Introduction and Scope</h2>
              <p>
                Living Way and its affiliated church organization (&quot;Living Way,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respect your privacy. This Privacy Policy explains how we collect, use, disclose, retain, and protect personal information when you use the Living Way mobile application, its related services, and communications (collectively, the &quot;App&quot;). By using the App, you acknowledge the practices described in this Policy.
              </p>
              <p>
                This Policy applies to the mobile App only. It does not govern third-party websites, services, or applications that may be linked from the App or used to provide particular functions. Those services have their own policies and terms.
              </p>
            </section>

            <section>
              <h2>2. Information We Collect</h2>
              <h3>2.1 Information You Provide</h3>
              <p>
                Depending on how you use the App, we may collect information you choose to provide, including your name and Google account profile information made available through Google Sign-In, a profile picture, preferences, poll participation, support requests, communications, feedback, and information included in messages if Support Messaging becomes available.
              </p>
              <p>
                Please do not submit information that is unnecessary for the requested feature. In particular, do not send passwords, financial-account details, government identification numbers, or urgent medical or emergency information through the App.
              </p>

              <h3>2.2 Account and Authentication Information</h3>
              <p>
                Google Sign-In is currently the App’s only authentication method. When you sign in, Google and Firebase Authentication may provide us with identifiers and account details necessary to create and maintain your App account, such as a Google account identifier, email address, display name, and profile image information, subject to the permissions you authorize and Google’s practices.
              </p>

              <h3>2.3 Device, Usage, Analytics, and Diagnostic Information</h3>
              <p>
                Analytics is always enabled in the App. We and our providers may automatically collect information about your use of the App, including device type, operating system, app version, language, approximate location derived from IP address or device settings where available, feature usage, pages or screens viewed, timestamps, interaction events, performance data, identifiers, and network information. We use Firebase Crashlytics to collect crash and diagnostic information, such as app errors, device state, stack traces, and related technical data.
              </p>

              <h3>2.4 Notifications and Permissions</h3>
              <p>
                With your device permission, the App may use notifications to send push notifications and local notifications generated by the App’s business logic. The App may also request access to photos, storage, or calendar where a specific feature requires it. We collect only the information reasonably necessary for the permission-enabled feature; you can control many permissions through device settings.
              </p>

              <h3>2.5 Information from Administrators and Service Providers</h3>
              <p>
                Church administrators may provide or manage limited account-related information. We may receive information from providers that help us operate the App, including authentication, analytics, crash reporting, cloud hosting, media management, delivery, deployment, and app-update providers.
              </p>
            </section>

            <section>
              <h2>3. How We Use Information</h2>
              <p>
                We use personal information to operate, provide, maintain, and improve the App; authenticate users; enable account and guest features; administer polls; display and manage profile pictures; send notifications; respond to inquiries; provide ministry and community services; protect users and the App; troubleshoot crashes; analyze usage; enforce our Terms; comply with legal obligations; and communicate about App operations.
              </p>
              <ul>
                <li>verify access and prevent fraud, abuse, and unauthorized activity;</li>
                <li>understand feature use, performance, reliability, and user experience through analytics;</li>
                <li>diagnose and fix technical problems through crash and diagnostic reporting;</li>
                <li>allow authorized church administrators to administer accounts and safeguard the community; and</li>
                <li>develop, test, and improve new features, including future Support Messaging.</li>
              </ul>
              <p>
                Where required by law, we rely on your consent, performance of a service requested by you, our legitimate interests in operating a safe and useful App, compliance with legal obligations, or another lawful basis recognized by applicable law.
              </p>
            </section>

            <section>
              <h2>4. How We Share Information</h2>
              <p>
                We do not sell personal information for money. We may share information as described below and only as reasonably necessary for the stated purpose.
              </p>
              <ul>
                <li>With authorized church administrators, who may manage accounts and have access to profile pictures associated with users in their administrative scope.</li>
                <li>With service providers that help deliver the App, including Google and Firebase services, MongoDB Atlas, Cloudinary, ImageKit, Vercel, Shorebird, and other vendors used for authentication, analytics, diagnostics, hosting, storage, image management, content delivery, deployment, and app updates.</li>
                <li>With pastors or support-team members when you choose to use a future Support Messaging feature. Authorized administrators may be able to view these messages for safeguarding, supervision, security, quality, legal compliance, and administration.</li>
                <li>With law enforcement, regulators, professional advisers, or other parties when we believe disclosure is necessary to comply with law, protect rights or safety, investigate misuse, or respond to valid legal process.</li>
                <li>With a successor or prospective transaction party in connection with a merger, reorganization, transfer, or other change affecting operation of the App, subject to applicable law.</li>
              </ul>
              <p>
                We may also use or disclose aggregated, de-identified, or anonymized information that does not reasonably identify you, where permitted by law.
              </p>
            </section>

            <section>
              <h2>5. Profile Pictures and Visibility</h2>
              <p>
                Profile pictures are intended to be visible only to the account holder and authorized church administrators. We do not intentionally make profile pictures visible to other ordinary App users unless we clearly notify you before a feature changes that visibility. You should upload only images you have the right to use and that are appropriate for the community.
              </p>
            </section>

            <section>
              <h2>6. Guest Access and Polls</h2>
              <p>
                Guests may use most App features without signing in. Certain features, including voting in polls, require authentication. If you use the App as a guest, we may still collect device, usage, analytics, and diagnostic information as described in this Policy. When you sign in, information associated with your use may be linked to your account where appropriate and permitted by law.
              </p>
            </section>

            <section>
              <h2>7. Support Messaging (Planned Feature)</h2>
              <p>
                Living Way may introduce one-to-one messaging between users and pastors or support-team members. If this feature is launched, messages will not be end-to-end encrypted. Authorized administrators may view messages for the purposes described in Section 4. Support Messages may be stored for a limited period and automatically deleted according to the retention schedule in effect at that time, operational needs, or legal requirements.
              </p>
              <p>
                Support Messaging is not an emergency service and is not designed for highly sensitive confidential communications. Do not use it to report immediate danger or to seek urgent medical, mental-health, legal, or emergency assistance. Contact local emergency services or an appropriate qualified professional instead.
              </p>
            </section>

            <section>
              <h2>8. Data Retention</h2>
              <p>
                We retain personal information for as long as reasonably necessary to provide the App, fulfill the purposes described in this Policy, meet legal, accounting, dispute-resolution, security, and recordkeeping requirements, and enforce our agreements. Retention periods vary based on the information, our relationship with you, legal requirements, and the nature of the feature.
              </p>
              <p>
                When you request account deletion, we will delete or de-identify applicable account information within a reasonable period, subject to legitimate backup, security, legal, fraud-prevention, and recordkeeping needs. Information held by third parties is subject to their retention practices and our applicable arrangements with them. Support Messages, if implemented, will be automatically deleted after the applicable configured retention period unless a longer period is required or permitted for safety, legal, or dispute-related reasons.
              </p>
            </section>

            <section>
              <h2>9. Your Choices and Rights</h2>
              <p>
                Subject to applicable law, you may have rights to access, correct, update, delete, restrict, object to, or receive a portable copy of certain personal information. You may also withdraw consent where processing is based on consent; withdrawal will not affect processing performed before withdrawal or processing based on another lawful ground.
              </p>
              <ul>
                <li><strong>Account deletion:</strong> request deletion of your own account through the App or its support channel. Authorized administrators may also delete accounts within their scope.</li>
                <li><strong>Profile and account updates:</strong> update available information through the App or request assistance through its support channel.</li>
                <li><strong>Notifications:</strong> manage push-notification permissions in your device settings and, where available, App settings.</li>
                <li><strong>Device permissions:</strong> manage photos, storage, calendar, and similar permissions through device settings.</li>
                <li><strong>Privacy requests:</strong> submit a request through the App’s support or contact channel, with enough information for us to verify your identity and respond.</li>
              </ul>
              <p>
                We may ask for reasonable verification before acting on a request and may decline or limit a request where permitted by law, including where it would adversely affect others’ rights, reveal protected information, undermine security, or conflict with legal obligations.
              </p>
            </section>

            <section>
              <h2>10. Children and Minors</h2>
              <p>
                The App may be used by minors under the direction and supervision of a parent or legal guardian. Living Way expects guardians normally to create or manage accounts for minors. We do not knowingly collect personal information from a child in violation of applicable law. If you believe a minor has provided information without appropriate parental or guardian authorization, contact us through the App’s support channel so we can investigate and take appropriate steps.
              </p>
            </section>

            <section>
              <h2>11. International Processing and Transfers</h2>
              <p>
                The App may use providers and systems located in Ethiopia and other countries. As a result, personal information may be processed, stored, or accessed outside the country where you live. Those countries may have privacy laws that differ from your home jurisdiction. Where required, we take reasonable steps to use appropriate safeguards for international transfers and require providers to protect information consistent with applicable law.
              </p>
            </section>

            <section>
              <h2>12. Security</h2>
              <p>
                We use reasonable administrative, technical, and organizational measures designed to protect personal information from unauthorized access, loss, misuse, alteration, and disclosure. These measures include access controls, vendor controls, authentication mechanisms, and practices intended to protect systems and data. No internet, mobile, or storage system is completely secure, and we cannot guarantee absolute security. You are responsible for securing your device and Google account credentials.
              </p>
            </section>

            <section>
              <h2>13. Third-Party Services</h2>
              <p>
                The App may use third-party services such as Google Sign-In, Firebase Authentication, Firebase Analytics, Firebase Crashlytics, MongoDB Atlas, Cloudinary, ImageKit, Vercel, and Shorebird. These providers may process information under their own privacy policies and terms, as well as under agreements with us where they act as service providers. We encourage you to review their policies. We are not responsible for third-party privacy practices except to the extent required by applicable law.
              </p>
            </section>

            <section>
              <h2>14. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy as the App, our practices, or legal requirements change. The revised Policy will be posted in the App or made available through another reasonable channel with a new effective date. Where a change is material, we will provide additional notice when required by law. Your continued use of the App after the revised Policy becomes effective means you acknowledge the updated Policy to the extent permitted by law.
              </p>
            </section>

            <section>
              <h2>15. Contact Us and Complaints</h2>
              <p>
                For questions, privacy requests, account-deletion requests, or complaints about this Policy, contact Living Way through the support or contact channel made available in the App. Please describe your request and provide enough information for us to verify your identity and respond. We will review and address concerns in accordance with applicable law.
              </p>
              <p>
                If you believe your privacy rights have been violated, you may also have the right to contact a relevant regulator or supervisory authority, where applicable. We encourage you to contact us first so we can try to resolve the issue directly.
              </p>
            </section>
          </div>
        </ContentContainer>
      </PrivacyWrapper>
    </Layout>
  );
};

export default PrivacyPolicy;
