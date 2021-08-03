// [note]
// Version 1.0.0
// 現状1画面において1つしか存在しない存在と考える

class ApprovalRequiredFixBalloon {
  constructor() {
    // configs
    this.strageName = 'theSiteCookieApproval';
    // dom
    this.balloon = document.querySelector(
      '[data-role="approval-required-fix-balloon"]'
    );
    this.accepter = document.querySelector(
      '[data-role="approval-required-fix-balloon-accepter"]'
    );
    // class names
    this.showAnimationClassName =
      'approval-required-fix-balloon-animation-show';
    this.hideAnimationClassName =
      'approval-required-fix-balloon-animation-hide';
    this.hideClassName = 'd-none';
    // events
    this.hundleAccepterClick = this.hundleAccepterClick.bind(this);
    this.accepter.addEventListener('click', () => {
      this.hundleAccepterClick();
    });
  }

  show() {
    this.balloon.classList.remove(this.hideClassName);
    this.balloon.classList.add(this.showAnimationClassName);
  }

  hide() {
    this.balloon.classList.add(this.hideAnimationClassName);

    setTimeout(() => {
      this.balloon.classList.add(this.hideClassName);
    }, 600); // [note] css animationの大体の終了後に。hard cording.
  }

  activeStrage() {
    if ('sessionStorage' in window && window.sessionStorage !== null) {
      sessionStorage.setItem(this.strageName, 'true');
    }
  }

  hundleAccepterClick() {
    this.hide();
    this.activeStrage();
  }

  init() {
    if ('sessionStorage' in window && window.sessionStorage !== null) {
      const session = sessionStorage.getItem(this.strageName);

      if (session === null) {
        this.show();
      }
    }
  }
}

export default ApprovalRequiredFixBalloon;
