import { Tooltip as TooltipAntd } from 'antd';

import { ContainerExternal, ContainerTooltip } from './tooltip.style';

interface TooltipProps {
  children: React.ReactNode;
  tooltip?: React.ReactNode;
  title?: string;
}

const Tooltip = ({ children, tooltip, title }: TooltipProps) => {
  if (title) {
    return <TooltipAntd title={title}>{children}</TooltipAntd>;
  }

  return (
    <ContainerTooltip>
      <ContainerExternal>{tooltip}</ContainerExternal>
      {children}
    </ContainerTooltip>
  );
};
export default Tooltip;
