import React from 'react'
import news1 from '../../assets/images/news1.jpg'
import news2 from '../../assets/images/2 (1).jpg'
import vesinhdegiayImg from '../../assets/images/ve-sinh-de-boost.jpg'
import lamsachdegiay1 from '../../assets/images/cach-lam-trang-de-giay-1.jpg'
import lamsachdegiay2 from '../../assets/images/cach_lam_sach_de_giay_bi_o_vang_3.jpg'

const NewsDetail = () => {
  return (
    <div className="news">
        <div className="container-ct">
            <div className="news-content">
            <img className="img1" src={news1} alt=""/>
            <h2>Hướng dẫn cách làm trắng đế giày bị ố vàng chuẩn chỉ</h2>
            <p>
                Adidas là một trong những hàng thời trang sneaker lớn nhất hiện nay của thế giới vì vậy hãng này luôn nghiên cứu và phát minh những công nghệ mới.. Năm 2014, adidas mang đến cho người dùng một trong những công nghệ tiên tiến lần đầu tiên được áp dụng trong lĩnh vực giày sneaker. Và gặt hái được nhiều sự thành công ngoài sức mong đợi vì công nghệ BOOST mang đến, như hiệu năng tốt hơn, nhẹ hơn, hỗ trợ tối đa cho người dùng vượt xa những công nghệ đang có hiện nay. Nhưng chúng cũng có những nhược điểm như dễ bị ố vàng và rất khó vệ sinh, khiến mất thẩm mỹ cho đôi giày.
            </p>
            <img src={vesinhdegiayImg} alt="" className="img2"/>
            <h3>
                Cách 1: Dùng kem đánh răng
            </h3>
            <p>
                Để thực hiện phương pháp này bạn cần kem đánh răng và một chiếc bàn chải. Kem đánh răng thì nhà nào cũng có rồi, đừng nói là nhà bạn không có nhé. Bàn chải thì sử dụng bàn chải đánh răng là tốt nhất vì độ lớn của nó cũng vừa bằng độ rộng của đế giày nên rất dễ chà. Nếu không có cái bàn chải đánh răng cũ nào thì bạn sử dụng bàn chải bình thường cũng được.
            </p>
            <img src={news2} alt="" className="img3"/>
            <p>
                Bàn chải đánh răng và kem đánh răng, hoặc dung dịch vệ sinh giày
            </p>
            <img src={lamsachdegiay1} alt="" className="img4"/>
            <p>
                Dù tính tẩy rửa của kem đánh răng không mạnh nhưng vẫn có thể tẩy đế giày màu trắng khi chúng mới bị những vết bẩn đeo bám.
            </p>
            <ul>
                <li>
                    Sau khi làm sạch bùn đất trên đế giày, bạn thoa trực tiếp kem đánh răng lên đế rồi dùng bàn chải đánh răng đã cũ để chà mạnh.
                </li>
                <li>
                    Thực hiện thao tác nhiều lần cho đến khi đế giày trắng lại như lúc ban đầu.
                </li>
                <li>
                    Bước cuối cùng bạn xả đế giày với nước sạch rồi để khô tự nhiên.
                </li>
            </ul>
            <p>
                <strong>Lưu ý</strong>: Cách tẩy trắng này chỉ nên dùng cho những đôi giày bị ố mới. Với những vết ố lâu ngày thì kem đánh răng sẽ không có tác dụng đâu. Bởi vậy, nếu giày của bạn đã bị ố vàng quá 3 tháng thì hãy lựa chọn cách làm trắng đế giày khác nhé.
            </p>
            <h3>
                Cách 2: Dùng chanh tươi
            </h3>
            <p>
                Không mấy bất ngờ khi chanh tươi luôn có mặt trong danh sách những cách làm sạch đế giày màu trắng. Như đã biết, chanh chứa hàm lượng axit rất cao nên nếu bạn muốn làm trắng đế giày, bạn có thể sử dụng chanh tươi để đánh bay  các vết ố vàng.
            </p>
            <ul>
                <li>
                    Cách thức thực hiện vô cùng đơn giản, bạn vắt chanh tươi để lấy nước, đựng trong một chén nhỏ.
                </li>
                <li>
                    Dùng khăn mềm nhúng vào nước chanh rồi chà lên đế giày, sau đó dùng bàn chải chà thật mạnh cho đến khi đế trắng trở lại. Cách làm này áp dụng với đế giày mới bị ố vàng, vết bẩn cứng đầu có thể sẽ khó khăn hơn.
                </li>
            </ul>
            <img src={lamsachdegiay2} alt="" className="img5"/>
            </div>
            <div className="news-social">
                <div className="social__tag">
                    <i className="fas fa-tag"></i>
                    <a href="/" className='link'>tag</a>
                </div>
                <div className="social__share">
                    <span>Chia sẻ:</span>
                    <a href="/" className='link'><i className="fab fa-facebook-square"></i></a>
                    <a href="/" className='link'><i className="fab fa-twitter"></i></a>
                    <a href="/" className='link'><i className="fab fa-pinterest"></i></a>
                    <a href="/" className='link'><i className="fab fa-google"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsDetail