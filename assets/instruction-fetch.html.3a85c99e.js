import{o as n,c as a,F as e,a as r,b as l}from"./app.cad05c30.js";const i={},t=r("h1",{id:"取指-instruction-fetch",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#取指-instruction-fetch","aria-hidden":"true"},"#"),l(" 取指（Instruction Fetch）")],-1),u=r("p",null,"取指是指处理器核将指令从存储器中读取出来的过程（按照其指令PC值所对应的存储器地址",-1),h=r("p",null,[l("取指的终极目的是以最"),r("strong",null,"快"),l("的速度且"),r("strong",null,"连续不断"),l("地从存储器中取出指令供处理器核执行，为了达到这两个目标，我们需要达到如下性能：")],-1),d=r("ul",null,[r("li",null,"对于非分支跳转指令，能够连续不断的按顺序将其从存储器中快速读取出来，即便是地址不对其的指令，也最好能够连续不断的从每个周期读出一条指令"),r("li",null,"对于分支跳转指令，能够快速判断其是否需要跳转，并快速取出指令")],-1),c=r("h2",{id:"如何加快取值",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#如何加快取值","aria-hidden":"true"},"#"),l(" 如何加快取值")],-1),o=r("h3",{id:"itcm-instruction-tightly-coupled-memory",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#itcm-instruction-tightly-coupled-memory","aria-hidden":"true"},"#"),l(" ITCM（Instruction Tightly Coupled Memory）")],-1),s=r("p",null,"ITCM（指令紧耦合寄存器）是指配置一段较小容量的（一般几十KB）的存储器（通常使用SRAM），用于存储指令，且在物理上离处理器核近而专属于处理器核。大多数极低功耗的处理器应用场景都是实时性较高的场景，因此倾向于使用延迟确定的ITCM。",-1),p=r("p",null,[r("strong",null,"优点"),l("：实现简单，容易理解，能够保证实时性")],-1),b=r("p",null,[r("strong",null,"缺点"),l("：使用地址区间寻址（无法像Cache一样映射无限大的存储空间），容量小（保证访问能在一个时钟周期内完成）")],-1),f=r("h3",{id:"i-cache-instruction-cache",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#i-cache-instruction-cache","aria-hidden":"true"},"#"),l(" I-Cache（Instruction Cache）")],-1),m=r("p",null,"指令缓存，是指利用软件程序的时间局部性和空间局部性，将存储器映射到Cache中，可以将平均访问时间降到最低。",-1),g=r("p",null,[r("strong",null,"优点"),l("：平均访问时间短")],-1),C=r("p",null,[r("strong",null,"缺点"),l("：实时性差（访问时间存在不确定性）")],-1),x=r("h2",{id:"如何处理非对齐指令",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#如何处理非对齐指令","aria-hidden":"true"},"#"),l(" 如何处理非对齐指令")],-1),k=r("p",null,"本段假设只存在16位和32位指令，且每次访存（ITCM）取出32位。",-1),B=r("h3",{id:"剩余缓存-普通指令非对齐",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#剩余缓存-普通指令非对齐","aria-hidden":"true"},"#"),l(" 剩余缓存（普通指令非对齐）")],-1),S=r("p",null,"对于按顺序取指的32位普通指令，可以使用剩余缓存（Leftover Buffer）保存上次没有用完的比特位，供下次使用。造成指令非对齐的情况共有两种：",-1),I=r("ul",null,[r("li",null,"只需要使用此次取出的32位中低16位和上一次取出的高16位组成一条32位指令"),r("li",null,"这条指令本身就是16位的，因此只需要取出低16位")],-1),T=r("p",null,"对于此次未使用的高16位，可以暂存于剩余缓存中，待下个周期取出32位指令字后，就可以马上拼出32位指令字。",-1),M=r("h3",{id:"多体化的sram存储-分支跳转指令",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#多体化的sram存储-分支跳转指令","aria-hidden":"true"},"#"),l(" 多体化的SRAM存储（分支跳转指令）")],-1),y=r("p",null,"对于分支跳转指令而言，如果跳转地址与32位边界不对齐，且需要取出一个32位指令字，剩余缓存自然是没用的。对此，通常的实现方式是使用多体（Bank）化的SRAM进行指令存储。",-1),R=r("p",null,"以常用的奇偶交错方式为例，使用两块32位宽的SRAM交错存储，两个连续的32位指令字会被分别存储在不同的SRAM中，对于不对齐的32位指令字，一个周期内可以同时访问两块SRAM取出两个32位指令字，然后将其拼接成真正需要的32位指令。",-1),A=r("h2",{id:"如何处理分支指令",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#如何处理分支指令","aria-hidden":"true"},"#"),l(" 如何处理分支指令")],-1),F=r("h3",{id:"无条件跳转指令-unconditional-jump-branch",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#无条件跳转指令-unconditional-jump-branch","aria-hidden":"true"},"#"),l(" 无条件跳转指令（Unconditional Jump/Branch）")],-1),j=r("p",null,"其中又分为无条件跳转/分支（Unconditional Direct Jump/Branch）和无条件间接跳转分支（Unconditional Indirect Jump/Branch），此处的“直接“和”间接“指的是跳转地址从指令字的立即数取出或从寄存器取出。",-1),w=r("p",null,"无条件跳转指令可以在取指并移码后直接跳转，不会引起流水线空泡（Bubble）。",-1),J=r("h3",{id:"有条件跳转指令-conditional-jump-branch",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#有条件跳转指令-conditional-jump-branch","aria-hidden":"true"},"#"),l(" 有条件跳转指令（Conditional Jump/Branch）")],-1),N=r("p",null,"有条件跳转指令同样分为有条件直接跳转/分支（Conditional Direct Jump/Branch）和有条件间接跳转分支（Conditional Indirect Jump/Branch）。",-1),D=r("p",null,"有条件跳转指令的跳转地址需要等到执行阶段结束才能够得到真实的跳转地址，会导致流水线停顿，通常有两种方式解决该问题：",-1),P=r("ol",null,[r("li",null,"流水线停顿，控制单元暂停取指或加入NOP（无动作）指令，此动作会一直持续到可能造成上述冲突的指令已执行完成为止"),r("li",null,"加入分支预测（branch prediction），预测分支指令跳转地址，当预测与真实跳转地址不符时，则冲刷流水线（Flush Pipeline）")],-1),U=r("p",null,"不难发现，高效的分支预测可以显著提高流水线效率，预测单元主要完成两个工作：",-1),v=r("ol",null,[r("li",null,"对分支指令跳转方向预测"),r("li",null,"计算得出跳转地址")],-1),K=r("p",null,"目前，分支预测已经可以达到90%以上的准确率。",-1),L=r("h4",{id:"静态分支预测",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#静态分支预测","aria-hidden":"true"},"#"),l(" 静态分支预测")],-1),O=r("p",null,"静态预测是最简单的分支预测，仅依赖于当前指令给出信息做出预测，一般而言，静态分支预测可以由编译器完成。",-1),q=r("h5",{id:"总预测不跳转-always-not-taken",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#总预测不跳转-always-not-taken","aria-hidden":"true"},"#"),l(" 总预测不跳转（Always Not Taken）")],-1),z=r("p",null,"对于分支指令总是预测为不会跳转。为了弥补冲刷流水线造成的性能损失，很多早期的RICS架构均使用了”分支延迟槽（Delay Slot）“的技术，即在分支指令后插入一条或若干条指令不受分支跳转的影响，不论分支是否跳转，后面的几条指令都一定会被执行。分支指令后几条的指令所在位置，就被称为分支延迟槽。由于分支延迟槽中的几条指令用于不会被执行而不会被退休（retired），因此不会受到冲刷流水线的影响。",-1),E=r("h5",{id:"btfn预测-back-taken-forward-not-taken",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#btfn预测-back-taken-forward-not-taken","aria-hidden":"true"},"#"),l(" BTFN预测（Back Taken, Forward Not Taken）")],-1),G=r("p",null,"BTFN预测，即对于向后跳转的指令预测为跳转，对于向前跳转的指令预测为不跳。BTFN方法的依据是向后跳转的情形要多余向前跳转的情形，譬如常见的for循环生成的指令中往往使用向后跳转的分支指令。",-1),H=r("h4",{id:"动态分支预测",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#动态分支预测","aria-hidden":"true"},"#"),l(" 动态分支预测")],-1),Q=r("p",null,"动态预测是指依赖已经执行过的历史信息和分支指令本身的信息综合进行”方向“预测。",-1),V=r("h5",{id:"一比特饱和计数器-1-bit-saturating-counter",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#一比特饱和计数器-1-bit-saturating-counter","aria-hidden":"true"},"#"),l(" 一比特饱和计数器（1-bit Saturating Counter）")],-1),W=r("p",null,"该策略采用一比特记录当前状态，共有两个状态，分别表示预测跳转/不跳转，即该策略使用上次跳转结果作为本次跳转预测。",-1),X=r("h5",{id:"二比特饱和计数器-2-bit-saturating-counter",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#二比特饱和计数器-2-bit-saturating-counter","aria-hidden":"true"},"#"),l(" 二比特饱和计数器（2-bit Saturating Counter）")],-1),Y=r("p",null,"该策略采用二比特记录当前状态，共有四个状态，如下图所示：",-1),Z=r("p",null,[r("img",{src:"/assets/2-bit-saturating-counter.78b0c8f6.jpg",alt:"2-bit Saturating Counter State Transition Diagram"})],-1),$=r("p",null,"图左边两个状态为不采纳(not token)，右边两个为采纳(token)。当不发生跳转时，状态向左移动一次；当不发生跳转时，状态向右移动一次。由红色到绿色需要连续两次分支选择。据评测，二比特饱和计数器的正确率可达到93.5%，预测期一般在分支指令解码前起作用。",-1),_=r("p",null,"二比特饱和计数器在理论上达到了较高正确率，但是实际应用中，会受到其他因素干扰，例如不同分支指令的跳转概率不同，对此可以对每个指令分设不同的计数器。在这样一系列的考量下，我们发展出了两级自适应预测器，局部/全局分支预测器，融合分支预测器，Agree预测器，神经分支预测器等。",-1),nn=r("h2",{id:"reference",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),l(" Reference")],-1),an=r("ul",null,[r("li",null,"《手把手教你设计CPU——RISC处理器篇》胡振波")],-1);i.render=function(r,l){return n(),a(e,null,[t,u,h,d,c,o,s,p,b,f,m,g,C,x,k,B,S,I,T,M,y,R,A,F,j,w,J,N,D,P,U,v,K,L,O,q,z,E,G,H,Q,V,W,X,Y,Z,$,_,nn,an],64)};export default i;