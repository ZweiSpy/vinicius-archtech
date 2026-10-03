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
      lastUpdated: "Última atualização: outubro de 2026",
      intro:
        "Esta Política descreve como a iniciativa Zwei Coorp's e o aplicativo Zwei Finance, sob a responsabilidade de seu desenvolvedor independente e controlador de dados (“nós”), tratam dados pessoais no site https://zweicoorp.com.br e no aplicativo. Canal oficial de atendimento e privacidade: zwei@zweicoorp.com.br.",
      backToSite: "Voltar ao site",
      sections: [
        {
          heading: "1. Identificação do Controlador",
          paragraphs: [
            "O tratamento de dados pessoais no âmbito do site zweicoorp.com.br e do aplicativo Zwei Finance é realizado pelo desenvolvedor independente responsável pela iniciativa Zwei Coorp's, domiciliado no estado do Rio de Janeiro - RJ, Brasil, atuando na qualidade de Controlador nos termos do Art. 5º, VI da LGPD (Lei 13.709/2018).",
            "Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, utilize o canal oficial: zwei@zweicoorp.com.br.",
          ],
        },
        {
          heading: "2. Escopo — Site vs App",
          paragraphs: [
            "Site (zweicoorp.com.br): páginas institucionais, portfólio, contato e páginas legais. Podemos processar dados que você envia voluntariamente ao nos contatar para orçamento ou atendimento.",
            "App Zwei Finance: cadastro, autenticação e dados financeiros que você mesmo registra (valores gastos ou previstos, categorias de custo de vida e informações correlatas do produto).",
            "Páginas de ponte de autenticação (/auth/confirmed e /auth/reset-password) apenas redirecionam ao app via deep link; tokens no hash da URL são transitórios e não são armazenados pelo site institucional.",
          ],
        },
        {
          heading: "3. Dados que coletamos",
          paragraphs: [
            "Nome, e-mail e celular/telefone, quando fornecidos voluntariamente no cadastro do app ou em contatos comerciais.",
            "Confirmação de contas e fluxos de autenticação (verificação de e-mail, redefinição de senha), com tokens temporários gerenciados por provedor seguro de autenticação.",
            "No Zwei Finance: valores gastos, valores previstos, categorias e demais dados de custo de vida / finanças pessoais que você enviar pelo próprio aplicativo.",
          ],
        },
        {
          heading: "4. Dados que NÃO coletamos nem armazenamos",
          paragraphs: [
            "Não coletamos nem armazenamos número de cartão de crédito ou débito.",
            "Não coletamos nem armazenamos números de conta bancária ou senhas financeiras.",
            "Não armazenamos senhas em texto puro no site institucional; a autenticação é gerenciada por provedor especializado. Você nunca deve enviar senhas por e-mail ou WhatsApp.",
          ],
        },
        {
          heading: "5. Finalidades e bases legais",
          paragraphs: [
            "Prestação do serviço do app e dos serviços profissionais contratados (execução de contrato / medidas pré-contratuais, Art. 7º, V da LGPD).",
            "Comunicação, suporte e segurança da conta (legítimo interesse operacional e/ou consentimento, conforme aplicável, Art. 7º, IX da LGPD).",
            "Cumprimento de obrigações legais pertinentes e defesa em eventuais procedimentos.",
          ],
        },
        {
          heading: "6. Compartilhamento e Segurança",
          paragraphs: [
            "Podemos compartilhar dados com prestadores de infraestrutura essenciais (hospedagem em nuvem, autenticação, analytics e e-mail transacional), sob rigorosas obrigações de confidencialidade e segurança.",
            "Não comercializamos nem vendemos dados pessoais sob hipótese alguma.",
          ],
        },
        {
          heading: "7. Retenção de Dados",
          paragraphs: [
            "Mantemos os dados pelo tempo necessário às finalidades descritas, obrigações legais e eventual defesa em disputas; após isso, excluímos ou anonimizamos quando cabível.",
            "Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados contra acessos não autorizados.",
          ],
        },
        {
          heading: "8. Direitos do titular (LGPD)",
          paragraphs: [
            "Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade, eliminação e revogação de consentimento, na medida aplicável pela LGPD.",
            "Pedidos podem ser feitos diretamente pelo e-mail de privacidade: zwei@zweicoorp.com.br.",
          ],
        },
        {
          heading: "9. Transição e Sucessão Empresarial",
          paragraphs: [
            "Caso as operações do site ou do aplicativo Zwei Finance venham a ser transferidas ou integradas a uma pessoa jurídica regularmente constituída sob a mesma liderança ou titularidade, os dados e direitos continuarão resguardados sob as mesmas diretrizes de segurança e privacidade descritas neste documento.",
          ],
        },
        {
          heading: "10. Alterações",
          paragraphs: [
            "Podemos atualizar esta Política periodicamente. A data de atualização constará no topo da página. O uso continuado dos serviços após a publicação indica ciência da versão vigente.",
          ],
        },
      ],
    },
    terms: {
      title: "Termos de Uso",
      lastUpdated: "Última atualização: outubro de 2026",
      intro:
        "Estes Termos regem o uso do site https://zweicoorp.com.br (marca Zwei Coorp's) e do aplicativo Zwei Finance, disponibilizados por desenvolvedor independente sediado no Rio de Janeiro - RJ, Brasil. Ao utilizar o site ou o app, você declara ter lido e concordado com estes Termos e com a Política de Privacidade.",
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
            "Site: vitrine institucional, portfólio de soluções, informações sobre BPO Financeiro, automação de rotinas (RPA), integrações ERP e desenvolvimento web, além de canais de contato.",
            "Zwei Finance: aplicativo para organização financeira pessoal e acompanhamento de gastos/previsões informados pelo próprio usuário. Não é instituição bancária, financeira, corretora nem emite cartões ou linhas de crédito.",
          ],
        },
        {
          heading: "3. Cadastro e conta (App)",
          paragraphs: [
            "Você se compromete a fornecer informações verdadeiras e a manter a confidencialidade das credenciais. A autenticação ocorre via provedor especializado; o site institucional não armazena sua senha.",
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
            "Marcas, layout, textos, códigos e software do site e do app pertencem ao desenvolvedor responsável pela Zwei Coorp's ou a seus respectivos licenciadores. É vedada a reprodução não autorizada.",
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
          heading: "8. Transição para Pessoa Jurídica",
          paragraphs: [
            "Fica expressamente previsto que os direitos, obrigações e titularidade relativos aos serviços e produtos poderão ser cedidos a qualquer momento a uma sociedade empresária constituída pelo desenvolvedor, assegurando a continuidade dos serviços sem descontinuidade contratual.",
          ],
        },
        {
          heading: "9. Alterações e encerramento",
          paragraphs: [
            "Podemos atualizar estes Termos e/ou suspender funcionalidades mediante aviso razoável quando exigido. Podemos encerrar contas que violem estes Termos.",
          ],
        },
        {
          heading: "10. Foro",
          paragraphs: [
            "Salvo disposição legal em contrário, fica eleito o foro da comarca da Capital do Estado do Rio de Janeiro - RJ, com renúncia a qualquer outro, por mais privilegiado que seja.",
          ],
        },
      ],
    },
  },
  en: {
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: October 2026",
      intro:
        "This Privacy Policy describes how Zwei Coorp's and the Zwei Finance application, operated by an independent software developer and data controller (“we”), handle personal data on https://zweicoorp.com.br and within the app. Official contact for privacy and data subject rights: zwei@zweicoorp.com.br.",
      backToSite: "Back to site",
      sections: [
        {
          heading: "1. Data Controller Identification",
          paragraphs: [
            "Data processing on zweicoorp.com.br and the Zwei Finance app is carried out by the independent developer responsible for Zwei Coorp's, based in the State of Rio de Janeiro, Brazil, acting as Data Controller pursuant to LGPD (Brazilian General Data Protection Law, Law 13,709/2018).",
            "To exercise rights or ask privacy questions, contact our official channel: zwei@zweicoorp.com.br.",
          ],
        },
        {
          heading: "2. Scope — Website vs Application",
          paragraphs: [
            "Website (zweicoorp.com.br): institutional pages, portfolio, contact, and legal pages. We process data you voluntarily submit when requesting a quote or support.",
            "Zwei Finance app: registration, authentication, and financial data you enter yourself (spent or planned amounts, cost-of-living categories, and related product data).",
            "Auth bridge pages (/auth/confirmed and /auth/reset-password) only open the app via deep link; URL hash tokens are transient and are not stored by the institutional website.",
          ],
        },
        {
          heading: "3. Data We Collect",
          paragraphs: [
            "Identification and contact details: name, email, and phone when voluntarily provided in app registration or commercial inquiries.",
            "Account confirmation and authentication flows (email verification, password reset), with temporary tokens managed by secure authentication providers.",
            "In Zwei Finance: spent amounts, planned amounts, categories, and other personal finance data you submit through the app.",
          ],
        },
        {
          heading: "4. Data We Do NOT Collect or Store",
          paragraphs: [
            "We do not collect or store credit or debit card numbers.",
            "We do not collect or store bank account numbers or financial institution passwords.",
            "We do not store passwords on the institutional website; authentication is handled by a specialized provider. Never send passwords by email or WhatsApp.",
          ],
        },
        {
          heading: "5. Purposes and Legal Bases",
          paragraphs: [
            "Providing the app and contracted professional services (performance of a contract / pre-contractual steps under LGPD).",
            "Communication, support, and account security (legitimate interest and/or consent, as applicable under LGPD).",
            "Compliance with applicable legal obligations and defense of rights.",
          ],
        },
        {
          heading: "6. Data Sharing and Security",
          paragraphs: [
            "We may share data with essential infrastructure providers (cloud hosting, authentication, transactional email, analytics) under confidentiality and security obligations.",
            "We never sell personal data under any circumstances.",
          ],
        },
        {
          heading: "7. Data Retention",
          paragraphs: [
            "We retain data for as long as needed for the stated purposes, legal obligations, and dispute defense; afterward we delete or anonymize when appropriate.",
            "We apply reasonable technical and organizational measures to protect personal data.",
          ],
        },
        {
          heading: "8. Data Subject Rights (LGPD)",
          paragraphs: [
            "You may request confirmation of processing, access, correction, anonymization, portability, deletion, and withdrawal of consent, as applicable under LGPD.",
            "Requests may be sent directly to: zwei@zweicoorp.com.br.",
          ],
        },
        {
          heading: "9. Corporate Transition",
          paragraphs: [
            "Should the operations of the site or Zwei Finance be transitioned or assigned to a formal corporate entity established under the same ownership or management, personal data will remain protected under the same standards set forth in this Policy.",
          ],
        },
        {
          heading: "10. Changes",
          paragraphs: [
            "We may update this Policy periodically. The update date appears at the top of the page. Continued use after publication indicates acknowledgment of the current version.",
          ],
        },
      ],
    },
    terms: {
      title: "Terms of Use",
      lastUpdated: "Last updated: October 2026",
      intro:
        "These Terms govern the use of https://zweicoorp.com.br (Zwei Coorp's) and the Zwei Finance application, offered by an independent software developer based in Rio de Janeiro - RJ, Brazil. By using the site or app, you acknowledge these Terms and the Privacy Policy.",
      backToSite: "Back to site",
      sections: [
        {
          heading: "1. Acceptance",
          paragraphs: [
            "Access to and use of the services imply acceptance of these Terms. If you disagree, do not use the website or the app.",
          ],
        },
        {
          heading: "2. Service Description",
          paragraphs: [
            "Website: institutional showcase, portfolio, information on Financial BPO, automation (RPA), ERP integrations, and web development, plus contact channels.",
            "Zwei Finance: an app for personal financial organization and tracking of expenses/forecasts entered by the user. It is not a bank, financial institution, broker, or card issuer.",
          ],
        },
        {
          heading: "3. Registration and Account (App)",
          paragraphs: [
            "You agree to provide accurate information and keep credentials confidential. Authentication may use a third-party provider; the institutional website does not store your password.",
            "Email confirmation and password-reset flows may open the app via deep link from zweicoorp.com.br pages.",
          ],
        },
        {
          heading: "4. User-Submitted Content and Data",
          paragraphs: [
            "In Zwei Finance, you are responsible for the financial data you record (amounts, categories, forecasts). You must not enter card numbers, bank account numbers, or third-party passwords in product fields.",
            "Using the services for unlawful, abusive purposes or in violation of third-party rights is prohibited.",
          ],
        },
        {
          heading: "5. Intellectual Property",
          paragraphs: [
            "Brands, layout, copy, software, and code of the site and app belong to the developer or its licensors. Unauthorized reproduction is forbidden.",
          ],
        },
        {
          heading: "6. Disclaimers and Limitations",
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
          heading: "8. Corporate Transition",
          paragraphs: [
            "The developer reserves the right to assign or transfer rights and obligations under these Terms to a corporate entity established in the future under the same leadership, ensuring service continuity.",
          ],
        },
        {
          heading: "9. Changes and Termination",
          paragraphs: [
            "We may update these Terms and/or suspend features with reasonable notice when required. We may terminate accounts that violate these Terms.",
          ],
        },
        {
          heading: "10. Venue",
          paragraphs: [
            "Unless mandatory law provides otherwise, disputes shall be submitted to the courts of the Capital of the State of Rio de Janeiro, Brazil, waiving any other venue.",
          ],
        },
      ],
    },
  },
};
