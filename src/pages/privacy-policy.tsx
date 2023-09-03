import './policy.scss';

function PrivacyPolicy() {
    return (
        <div className="content">
            <div className="section">
                <h1 className="text-center section-title">Privacy Policy</h1>
                <div className="row mb-2">
                    <div className="col-1 text-end">1.</div>
                    <div className="col-11"><strong>Personal Data.</strong>
                        Personal data includes personal information that you have provided to us
                        when you sign up as our member or when you purchase any products from our website, including your name,
                        billing and/or delivery address, telephone number, email address, bank account and payment information,
                        etc.</div>
                </div>
                <div className="row mb-2">
                    <div className="col-1 text-end">2.</div>
                    <div className="col-11"><strong>Use and Processing of Personal Data.</strong>
                        We may use and process your personal data to provide services that you have requested or services that
                        may be of interest to you, to respond to your enquiry and for our administrative purposes. We may also
                        send you newsletters, our latest events and updates, etc. Please notify us if you do not wish us to use
                        and process your personal data for providing you with our newsletters, as well as our latest events and
                        updates.</div>
                </div>
                <div className="row mb-2">
                    <div className="col-1 text-end">3.</div>
                    <div className="col-11"><strong>Disclosure to Third Parties.</strong>
                        We may share your personal data with our third party service providers including IT service providers,
                        data entry service providers, professional advisors and auditors, government and regulatory authorities
                        to comply with any laws, regulations, government requirements and policies.</div>
                </div>
                <div className="row mb-2">
                    <div className="col-1 text-end">4.</div>
                    <div className="col-11"><strong>Contact Us.</strong>
                        If you have any questions or concerns about our privacy policy, please contact us via email at
                        <a href="mailto:general@athosathlete.com"> general@athosathlete.com</a>.
                    </div>
                </div>    </div>
        </div>
    );
}

export default PrivacyPolicy;
