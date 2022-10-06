import React from 'react';
import './style.css'
import './responsive.css'

const Contact = () => {
    return (
      <div className='contact_form'>
        <form>
          <div className="contact_h">メールアドレス（必須）</div>
          <input />
          <div className="contact_h">お問い合わせ内容（必須）</div>
          <textarea />
          <input
            type="submit"
            value="送信"
          />
        </form>
      </div>
    );
  }


export default Contact;
