import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Testimonial from './Testimonial';

const Info = styled.div`
    padding: 10rem var(--landing-page-side-padding);

    .info__container {
        max-width: var(--landing-page-max-width);
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 5rem;
        margin: 0 auto;

        .info__text {
            display: flex;
            flex-direction: column;
            align-items: center;
            h2 {
                font-size: 24px;
            }
            p {
                font-size: 12px;
                max-width: 50rem;
            }
        }

        .testimonials {
            display: flex;
            margin: 0 auto;
            max-width: 30rem;
            flex-direction: column;
            justify-content: center;
            gap: 3rem;

            @media (min-width: 769px) {
                max-width: none;
                flex-direction: row;
            }
        }

        .separator {
            height: 0.1rem;
            background-color: var(--wf-base-800);
        }

        > .call-to-action {
            text-decoration: none;
            align-self: center;
            button {
            }
            p {
                color: var(--wf-base-800);
            }
        }
    }
`;

export default () => {
    return (
        <Info>
            <div className="info__container">
                <div className="info__text">
                    <h2>Secure, Private, Connected, Free</h2>
                    <p>
                        Unlock the true potential of the internet with our fast and reliable VPN service. Secure your digital life and enjoy
                        unrestricted access to online content from anywhere in the world. Say goodbye to online censorship and surveillance
                        - our VPN service has got you covered. Keep your data safe and your online activities private with our
                        military-grade encryption technology. Protect yourself from hackers, identity thieves, and cybercriminals.
                    </p>
                </div>

                <div className="testimonials">
                    <Testimonial
                        imageSrc="/pexels-mariatheodora-andrikopoulou-14390223.jpg"
                        title="Security: Encryption, No-Logging, Kill Switch"
                        textContent={
                            "Security is what matters most. That's why we use strong encryption to secure your data and protect it from hackers, government surveillance, and other online threats. Additionally, our no-logging policy ensures that your activity is not being monitored or recorded by the VPN provider. In case of a sudden VPN disconnection, a kill switch feature automatically cuts off internet access to prevent any data leaks."
                        }
                    />
                    <Testimonial
                        imageSrc="/pexels-matt-hardy-5327027.jpg"
                        title="Privacy: Anonymous, Masking IP."
                        textContent={
                            'By masking your IP address, we keep your online activities anonymous and make it impossible for third parties to track your browsing history. Additional privacy features such as blocking tracking cookies or preventing browser fingerprinting ensure constant privacy.'
                        }
                    />
                    <Testimonial
                        imageSrc="/pexels-mathilde-langevin-15823364.jpg"
                        title="Access: Geo-Unblocking, Lightning Fast Speeds, Torrent-Friendly."
                        textContent={
                            'We help you access content that may be restricted in your location, such as streaming services or websites. This is achieved by connecting to a server in a different country, which makes it appear as if you are browsing from that location. Fast speeds are paramount, so that you can count on us for streaming content without buffering or delays. Through this VPN service you can download and share files securely and anonymously.'
                        }
                    />
                </div>

                <div className="separator" />

                <Link className="call-to-action" to="/signup">
                    <button>Create an Account</button>
                    <p>No card information required</p>
                </Link>
            </div>
        </Info>
    );
};
