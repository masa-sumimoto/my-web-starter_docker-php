import ApprovalRequiredFixBalloon from './components/ApprovalRequiredFixBalloon';

// approval-required-fix-balloon
if (
  document.querySelector('[data-role="approval-required-fix-balloon"]') !== null
) {
  const approvalRequiredFixBalloon = new ApprovalRequiredFixBalloon();
  approvalRequiredFixBalloon.init();
}
