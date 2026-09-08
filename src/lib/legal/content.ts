export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalDocument {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
  backToSite: string;
}

export interface LegalContent {
  privacy: LegalDocument;
  terms: LegalDocument;
}

export const legalContent: Record<"pt" | "en", LegalContent> = {
  pt: {
    privacy: {
      title: "Política de Privacidade",
      lastUpdated: "Última atualização: setembro de 2026",
      intro:
        "Esta Política descreve como a Zwei Coorporações LTDA (“nós”), operando sob a marca Zwei Coorp's e o aplicativo Zwei Finance, trata dados pessoais no site https://zweicoorp.com.br e no app. Este documento é um template orientado à LGPD e deve ser revisado pelo responsável legal da empresa. Placeholders: CNPJ [CNPJ], endereço [ENDEREÇO], contato privacidade@zweicoorp.com.br.",
      backToSite: "Voltar ao site",
      sections: [
        {
          heading: "1. Controladora",
          paragraphs: [
            "A controladora dos dados é a Zwei Coorporações LTDA, CNPJ [CNPJ], com sede em [ENDEREÇO]. A marca comercial Zwei Coorp's identifica o site e os serviços profissionais. O Zwei Finance é o aplicativo de gestão financeira disponibilizado pela controladora.",
            "Para exercer direitos ou tirar dúvidas sobre privacidade, utilize privacidade@zweicoorp.com.br ou os canais oficiais indicados no site.",
          ],
        },
        {
          heading: "2. Escopo — Site vs App",
          paragraphs: [
            "Site (zweicoorp.com.br): páginas institucionais, portfólio, contato (incluindo WhatsApp) e páginas legais. Podemos processar dados que você envia voluntariamente ao nos contatar.",
            "App Zwei Finance: cadastro, autenticação e dados financeiros que você mesmo registra (valores gastos ou previstos, categorias de custo de vida e informações correlatas do produto).",
            "Páginas de ponte de autenticação (/auth/confirmed e /auth/reset-password) apenas redirecionam ao app via deep link; tokens no hash da URL são transitórios e não são armazenados pelo site institucional.",
          ],
        },
        {
          heading: "3. Dados que coletamos",
          paragraphs: [
            "Nome, e-mail e celular/telefone, quando fornecidos no cadastro do app ou em contatos comerciais.",
            "Confirmação de contas e fluxos de autenticação (verificação de e-mail, redefinição de senha), com tokens temporários gerenciados pelo provedor de autenticação.",
            "No Zwei Finance: valores gastos, valores previstos, categorias e demais dados de custo de vida / finanças pessoais que você enviar pelo próprio aplicativo.",
          ],
        },
        {
          heading: "4. Dados que NÃO coletamos nem armazenamos",
          paragraphs: [
            "Não coletamos nem armazenamos número de cartão de crédito ou débito.",
            "Não coletamos nem armazenamos números de conta bancária.",
            "Não armazenamos senhas no site institucional; a autenticação é feita por provedor especializado. Você nunca deve enviar senha por e-mail ou WhatsApp.",
          ],
        },
        {
          heading: "5. Finalidades e bases legais",
          paragraphs: [
            "Prestação do serviço do app e dos serviços profissionais contratados (execução de contrato / medidas pré-contratuais).",
            "Comunicação, suporte e segurança da conta (legítimo interesse operacional e/ou consentimento, conforme o caso).",
            "Cumprimento de obrigações legais e defesa de direitos.",
          ],
        },
        {
          heading: "6. Compartilhamento",
          paragraphs: [
            "Podemos compartilhar dados com prestadores essenciais (hospedagem, autenticação, e-mail, analytics), sob obrigações de confidencialidade e segurança.",
            "Não vendemos dados pessoais.",
          ],
        },
        {
          heading: "7. Retenção e segurança",
          paragraphs: [
            "Mantemos os dados pelo tempo necessário às finalidades descritas, obrigações legais e eventual defesa em disputas; após isso, excluímos ou anonimizamos quando cabível.",
            "Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados. Nenhum sistema é 100% isento de risco.",
          ],
        },
        {
          heading: "8. Direitos do titular (LGPD)",
          paragraphs: [
            "Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade, eliminação, informação sobre compartilhamentos e revogação de consentimento, na medida aplicável à LGPD.",
            "Pedidos podem ser feitos pelo e-mail de privacidade indicado acima. Poderemos solicitar verificação de identidade.",
          ],
        },
        {
          heading: "9. Alterações",
          paragraphs: [
            "Podemos atualizar esta Política periodicamente. A data de atualização constará no topo da página. O uso continuado dos serviços após a publicação indica ciência da versão vigente, quando a lei assim permitir.",
          ],
        },
      ],
    },
    terms: {
      title: "Termos de Uso",
      lastUpdated: "Última atualização: setembro de 2026",
      intro:
        "Estes Termos regem o uso do site https://zweicoorp.com.br (marca Zwei Coorp's) e do aplicativo Zwei Finance, oferecidos pela Zwei Coorporações LTDA, CNPJ [CNPJ], sede [ENDEREÇO]. Ao utilizar o site ou o app, você declara ter lido e concordado com estes Termos e com a Política de Privacidade. Texto template — revisão jurídica recomendada.",
      backToSite: "Voltar ao site",
      sections: [
        {
          heading: "1. Aceitação",
          paragraphs: [
            "O acesso e uso dos serviços implicam aceitação destes Termos. Se você não concordar, não utilize o site ou o app.",
          ],
        },
        {
          heading: "2. Descrição dos serviços",
          paragraphs: [
            "Site: vitrine institucional, portfólio, informações sobre BPO Financeiro, automação, integrações ERP e desenvolvimento web, além de canais de contato.",
            "Zwei Finance: aplicativo para organização financeira e acompanhamento de gastos/previsões informados pelo próprio usuário. Não é instituição financeira, banco, corretora nem emite cartões.",
          ],
        },
        {
          heading: "3. Cadastro e conta (App)",
          paragraphs: [
            "Você se compromete a fornecer informações verdadeiras e a manter a confidencialidade das credenciais. A autenticação pode ocorrer via provedor terceiro; o site institucional não armazena sua senha.",
            "Fluxos de confirmação de e-mail e redefinição de senha podem abrir o app por deep link a partir de páginas do domínio zweicoorp.com.br.",
          ],
        },
        {
          heading: "4. Conteúdo e dados inseridos pelo usuário",
          paragraphs: [
            "No Zwei Finance, você é responsável pelos dados financeiros que registra (valores, categorias, previsões). Não devemos receber, e você não deve cadastrar, números de cartão, números de conta bancária ou senhas de terceiros nos campos do produto.",
            "É proibido usar os serviços para fins ilícitos, abusivos ou que violem direitos de terceiros.",
          ],
        },
        {
          heading: "5. Propriedade intelectual",
          paragraphs: [
            "Marcas, layout, textos e software do site e do app pertencem à Zwei Coorporações LTDA ou a licenciadores. É vedada a reprodução não autorizada.",
          ],
        },
        {
          heading: "6. Isenções e limitações",
          paragraphs: [
            "O Zwei Finance é ferramenta de organização e não constitui aconselhamento financeiro, contábil ou jurídico. Decisões de investimento ou crédito são de sua exclusiva responsabilidade.",
            "O site e o app são fornecidos “como estão”, dentro dos limites da lei. Não garantimos disponibilidade ininterrupta.",
          ],
        },
        {
          heading: "7. Privacidade",
          paragraphs: [
            "O tratamento de dados pessoais está descrito na Política de Privacidade disponível em /politica-de-privacidade.",
          ],
        },
        {
          heading: "8. Alterações e encerramento",
          paragraphs: [
            "Podemos atualizar estes Termos e/ou suspender funcionalidades mediante aviso razoável quando exigido. Podemos encerrar contas que violem estes Termos.",
          ],
        },
        {
          heading: "9. Foro",
          paragraphs: [
            "Salvo disposição legal em contrário, fica eleito o foro da comarca da sede da Zwei Coorporações LTDA ([ENDEREÇO]), com renúncia a qualquer outro, por mais privilegiado que seja.",
          ],
        },
      ],
    },
  },
  en: {
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: September 2026",
      intro:
        "This Policy describes how Zwei Coorporações LTDA (“we”), operating under the Zwei Coorp's brand and the Zwei Finance app, processes personal data on https://zweicoorp.com.br and in the app. This is an LGPD-oriented template and should be reviewed by the company’s legal responsible. Placeholders: Tax ID [CNPJ], address [ENDEREÇO], contact privacidade@zweicoorp.com.br.",
      backToSite: "Back to site",
      sections: [
        {
          heading: "1. Controller",
          paragraphs: [
            "The data controller is Zwei Coorporações LTDA, CNPJ [CNPJ], headquartered at [ENDEREÇO]. Zwei Coorp's is the commercial brand for the website and professional services. Zwei Finance is the financial management application provided by the controller.",
            "To exercise rights or ask privacy questions, contact privacidade@zweicoorp.com.br or the official channels listed on the website.",
          ],
        },
        {
          heading: "2. Scope — Website vs App",
          paragraphs: [
            "Website (zweicoorp.com.br): institutional pages, portfolio, contact (including WhatsApp), and legal pages. We may process data you voluntarily submit when contacting us.",
            "Zwei Finance app: registration, authentication, and financial data you enter yourself (spent or planned amounts, cost-of-living categories, and related product data).",
            "Auth bridge pages (/auth/confirmed and /auth/reset-password) only open the app via deep link; URL hash tokens are transient and are not stored by the institutional website.",
          ],
        },
        {
          heading: "3. Data we collect",
          paragraphs: [
            "Name, email, and phone/mobile when provided in app registration or business contact.",
            "Account confirmation and authentication flows (email verification, password reset), with temporary tokens managed by the authentication provider.",
            "In Zwei Finance: spent amounts, planned amounts, categories, and other cost-of-living / personal finance data you submit through the app.",
          ],
        },
        {
          heading: "4. Data we do NOT collect or store",
          paragraphs: [
            "We do not collect or store credit/debit card numbers.",
            "We do not collect or store bank account numbers.",
            "We do not store passwords on the institutional website; authentication is handled by a specialized provider. Never send passwords by email or WhatsApp.",
          ],
        },
        {
          heading: "5. Purposes and legal bases",
          paragraphs: [
            "Providing the app and contracted professional services (performance of a contract / pre-contractual steps).",
            "Communication, support, and account security (legitimate interest and/or consent, as applicable).",
            "Compliance with legal obligations and establishment or defense of legal claims.",
          ],
        },
        {
          heading: "6. Sharing",
          paragraphs: [
            "We may share data with essential providers (hosting, authentication, email, analytics) under confidentiality and security obligations.",
            "We do not sell personal data.",
          ],
        },
        {
          heading: "7. Retention and security",
          paragraphs: [
            "We retain data for as long as needed for the stated purposes, legal obligations, and dispute defense; afterward we delete or anonymize when appropriate.",
            "We apply reasonable technical and organizational measures. No system is risk-free.",
          ],
        },
        {
          heading: "8. Data subject rights (LGPD)",
          paragraphs: [
            "You may request confirmation of processing, access, correction, anonymization, portability, deletion, information on sharing, and withdrawal of consent, as applicable under LGPD.",
            "Requests may be sent to the privacy email above. We may ask for identity verification.",
          ],
        },
        {
          heading: "9. Changes",
          paragraphs: [
            "We may update this Policy periodically. The update date appears at the top of the page. Continued use after publication may indicate acknowledgment of the current version where permitted by law.",
          ],
        },
      ],
    },
    terms: {
      title: "Terms of Use",
      lastUpdated: "Last updated: September 2026",
      intro:
        "These Terms govern the use of https://zweicoorp.com.br (Zwei Coorp's brand) and the Zwei Finance application, offered by Zwei Coorporações LTDA, CNPJ [CNPJ], address [ENDEREÇO]. By using the site or app, you acknowledge these Terms and the Privacy Policy. Template text — legal review recommended.",
      backToSite: "Back to site",
      sections: [
        {
          heading: "1. Acceptance",
          paragraphs: [
            "Access to and use of the services imply acceptance of these Terms. If you disagree, do not use the website or the app.",
          ],
        },
        {
          heading: "2. Service description",
          paragraphs: [
            "Website: institutional showcase, portfolio, information on Financial BPO, automation, ERP integrations and web development, plus contact channels.",
            "Zwei Finance: an app for financial organization and tracking of expenses/forecasts entered by the user. It is not a bank, broker, or card issuer.",
          ],
        },
        {
          heading: "3. Registration and account (App)",
          paragraphs: [
            "You agree to provide accurate information and keep credentials confidential. Authentication may use a third-party provider; the institutional website does not store your password.",
            "Email confirmation and password-reset flows may open the app via deep link from zweicoorp.com.br pages.",
          ],
        },
        {
          heading: "4. User-submitted content and data",
          paragraphs: [
            "In Zwei Finance, you are responsible for the financial data you record (amounts, categories, forecasts). You must not enter card numbers, bank account numbers, or third-party passwords in product fields.",
            "Using the services for unlawful, abusive purposes or in violation of third-party rights is prohibited.",
          ],
        },
        {
          heading: "5. Intellectual property",
          paragraphs: [
            "Brands, layout, copy, and software of the site and app belong to Zwei Coorporações LTDA or its licensors. Unauthorized reproduction is forbidden.",
          ],
        },
        {
          heading: "6. Disclaimers and limitations",
          paragraphs: [
            "Zwei Finance is an organization tool and does not constitute financial, accounting, or legal advice. Investment or credit decisions are solely yours.",
            "The site and app are provided “as is,” within legal limits. We do not guarantee uninterrupted availability.",
          ],
        },
        {
          heading: "7. Privacy",
          paragraphs: [
            "Personal data processing is described in the Privacy Policy at /politica-de-privacidade.",
          ],
        },
        {
          heading: "8. Changes and termination",
          paragraphs: [
            "We may update these Terms and/or suspend features with reasonable notice when required. We may terminate accounts that violate these Terms.",
          ],
        },
        {
          heading: "9. Venue",
          paragraphs: [
            "Unless mandatory law provides otherwise, disputes shall be submitted to the courts of the venue of Zwei Coorporações LTDA’s headquarters ([ENDEREÇO]), waiving any other venue.",
          ],
        },
      ],
    },
  },
};
