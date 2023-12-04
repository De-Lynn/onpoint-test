import bg2 from '../img/bg2.png'
import Sperm1 from '../svg/message/sperm-1.svg'
import Sperm2 from '../svg/message/sperm-2.svg'
import Sperm3 from '../svg/message/sperm-3.svg'
import Sperm4 from '../svg/message/sperm-4.svg'
import Sperm5 from '../svg/message/sperm-5.svg'
import '../css/Message.scss'

export const Message = (props) => {
    return (
        <div className="message" ref={props.messageRef}>
            <style dangerouslySetInnerHTML={{
                __html:`
                    .message {
                        background: url(${bg2}) no-repeat;
                        background-size: 100%;
                    }
                `
            }}></style>
            <div className="message__content _container">
                <div className="message__title">Текст <br />сообщения</div>
                <div className='message__background'></div>
                <div className='message__frame top'></div>
                <div className='message__frame bottom'></div>
                <div className="message__letter">
                    <div className="letter__text">
                        <span className="letter__text bold">Lorem ipsum dolor sit amet, </span>
                        consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut morbi 
                        tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam eget 
                        felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam 
                        dignissim diam quis enim lobortis. Est sit amet facilisis magna. 
                        Neque laoreet suspendisse interdum consectetur libero id. 
                        Nec ullamcorper sit amet risus nullam eget felis eget. 
                        Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. 
                        Euismod quis viverra nibh cras pulvinar mattis nunc. 
                        Massa massa ultricies mi quis. Sit amet massa vitae tortor 
                        condimentum lacinia. Et malesuada fames ac turpis egestas 
                        integer eget. Elementum pulvinar etiam non quam lacus suspendisse 
                        faucibus interdum posuere.
                        <br /><br />
                        Amet justo donec enim diam vulputate ut pharetra sit. 
                        Risus ultricies tristique nulla aliquet enim tortor at auctor. 
                        Velit sed ullamcorper morbi tincidunt ornare massa. 
                        Quis hendrerit dolor magna eget est lorem ipsum. Etiam dignissim 
                        diam quis enim. Gravida neque convallis a cras. Ut enim blandit 
                        volutpat maecenas volutpat. Mauris sit amet massa vitae tortor 
                        condimentum lacinia quis vel.
                    </div>
                </div>
            </div>

            <Sperm1 className='sperm-1 absolute' viewBox='0 0 2282 1063'/>
            <Sperm2 className='sperm-2 absolute' viewBox='0 0 1461 685'/>
            <Sperm3 className='sperm-3 absolute' viewBox='0 0 828 393'/>
            <Sperm4 className='sperm-4 absolute' viewBox='0 0 1462 685'/>
            <Sperm5 className='sperm-5 absolute' viewBox='0 0 655 318'/>
        </div>
    )
}