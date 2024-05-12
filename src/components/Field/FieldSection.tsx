import { BsCameraReels } from 'react-icons/bs';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { LuUserCheck } from 'react-icons/lu';

import Title from '../Title';
import FieldCard from './FieldCard';

import skill1 from '../../assets/images/skill-1.png';
import skill2 from '../../assets/images/skill-2.png';
import skill3 from '../../assets/images/skill-3.png';
import skill4 from '../../assets/images/skill-4.png';

export default function FieldSection() {
  return (
    <section id="linh-vuc" className="w-full py-20  ">
      <Title title="Lĩnh Vực" des="Chuyên môn" />
      <hr className="border-[#222222] border-solid border-t-2 w-full" />
      <div className="grid grid-cols-1 pt-10 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-20">
        <FieldCard title="Đạo diễn" icon={<BsCameraReels />} image={skill1} />
        <FieldCard title="Biên đạo múa" icon={<IoIosPeople />} image={skill2} />
        <FieldCard
          title="Giảng viên"
          icon={<FaChalkboardTeacher />}
          image={skill4}
        />
        <FieldCard title="Giám khảo" icon={<LuUserCheck />} image={skill3} />
      </div>
    </section>
  );
}
