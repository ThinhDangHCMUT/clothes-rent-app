import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordian";

type ProductDescriptionType = {
  show: boolean;
};

const Description = ({ show }: ProductDescriptionType) => {
  const style = {
    display: show ? "flex" : "none",
  };

  return (
    <section style={style} className="product-single__description">
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Mô tả sản phẩm</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <li>Thiết kể độc đáo</li>
            <li>Mẫu mã đa dạng</li>
            <li>Có nhiều size để chọn lựa</li>
            <li>Thích hợp cho những buổi tiệc ngoài trời</li>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Chi tiết</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <li>Kích thước: Dài 150 Rộng 100</li>
            <li>Số lượng: 100</li>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Các điều khoản khi cho thuê</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <h2>Thế chấp khi thuê</h2>
            <li className="ml-5">Đối chiếu CCCD và giấy phép lái xe</li>
            <h2>Giấy tờ khi thuê sản phẩm</h2>
            <li className="ml-5">Đối chiếu CCCD và giấy phép lái xe</li>
            <h2>Điều khoản</h2>
            <li className="ml-5">Sử dụng tài sản đúng mục đích</li>
            <li className="ml-5">Không đem tài sản để cầm cố</li>
            <li className="ml-5">
              Nếu phát hiện vi phạm, sẽ trả phí phát sinh
            </li>
            <li className="ml-5">
              Giữ gìn sản phẩm thất sạch sẽ, không hư hại
            </li>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Description;
