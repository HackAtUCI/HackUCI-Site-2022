import React, { Component, createRef } from "react";
const SCROLLSPY_NAV_NAMESPACE = "react-scrollspy-nav";

/**
 * adapted from from StephenWeiXu/react-scrollspy-nav
 * added className prop to created div element
 * added "scroll lock" to prevent stuttering when navigating while auto-scrolling
 * replaced document selector with React Ref
 */

/**
 * ScrollspyNav component. Refer to below for the props it receives
 */
class ScrollspyNav extends Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.navContent = createRef();
    this.scrollTargetIds = this.props.scrollTargetIds;
    this.activeNavClass = this.props.activeNavClass;
    this.scrollDuration = Number(this.props.scrollDuration) || 1000;
    this.headerBackground =
      this.props.headerBackground === "true" ? true : false;
    this.offset = this.props.offset || 0;

    this.onScroll = this.onScroll.bind(this);

    if (this.props.router && this.props.router === "HashRouter") {
      this.homeDefaultLink = "#/";
      this.hashIdentifier = "#/#";
    } else {
      this.homeDefaultLink = "/";
      this.hashIdentifier = "#";
    }
  }

  /**
   * Scroll event handler. It checks the current window offset and compares it with the pageYOffset of each
   *  target sections. It highlights the nav link when scrolling to a corresponding section
   */
  onScroll() {
    if (this.scrolling) {
      return;
    }

    let scrollSectionOffsetTop;
    this.scrollTargetIds.forEach((sectionID, index) => {
      if (!document.getElementById(sectionID)) {
        console.warn(
          `${SCROLLSPY_NAV_NAMESPACE}: no element with id ${sectionID} present in the DOM`
        );
        return;
      }

      scrollSectionOffsetTop =
        document.getElementById(sectionID).offsetTop -
        (this.headerBackground ? this.navContent.current.scrollHeight : 0);

      if (
        window.pageYOffset - this.offset >= scrollSectionOffsetTop &&
        window.pageYOffset <
          scrollSectionOffsetTop +
            document.getElementById(sectionID).scrollHeight
      ) {
        this.getNavLinkElement(sectionID).classList.add(this.activeNavClass);
        this.clearOtherNavLinkActiveStyle(sectionID);
      } else {
        this.getNavLinkElement(sectionID).classList.remove(this.activeNavClass);
      }

      if (
        window.innerHeight + window.pageYOffset >= document.body.scrollHeight &&
        index === this.scrollTargetIds.length - 1
      ) {
        this.getNavLinkElement(sectionID).classList.add(this.activeNavClass);
        this.clearOtherNavLinkActiveStyle(sectionID);
      }
    });
  }

  easeInOutQuad(current_time, start, change, duration) {
    current_time /= duration / 2;
    if (current_time < 1)
      return (change / 2) * current_time * current_time + start;
    current_time--;
    return (-change / 2) * (current_time * (current_time - 2) - 1) + start;
  }

  /**
   * Perform scroll animation with given start place, end place and duration
   * @param {Number} start
   * @param {Number} to
   * @param {Number} duration
   */
  scrollTo(start, to, duration) {
    if (this.scrolling) {
      return;
    }

    let change = to - start,
      currentTime = 0,
      increment = 10;

    this.scrolling = true;
    let animateScroll = () => {
      currentTime += increment;
      let val = this.easeInOutQuad(currentTime, start, change, duration);
      window.scrollTo(0, val);
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      } else {
        this.scrolling = false;
        window.scroll(0, val + 1);
        this.onScroll();
      }
    };

    animateScroll();
  }

  /**
   * Get the nav link element with a given sectionID that the nav link links to
   * @param {String} sectionID
   */
  getNavLinkElement(sectionID) {
    return this.navContent.current.querySelector(
      `a[href='${this.hashIdentifier}${sectionID}']`
    );
  }

  /**
   * Given a nav href url, get its clean sectionID based on if there is hash router identifier or not
   * @param {String} navHref
   */
  getNavToSectionID(navHref) {
    return navHref.includes(this.hashIdentifier)
      ? navHref.replace(this.hashIdentifier, "")
      : "";
  }

  /**
   * Clear the highlight style on the non-current viewed nav elements
   * @param {String} excludeSectionID
   */
  clearOtherNavLinkActiveStyle(excludeSectionID) {
    this.scrollTargetIds.forEach((sectionID, index) => {
      if (!excludeSectionID || sectionID !== excludeSectionID) {
        this.getNavLinkElement(sectionID).classList.remove(this.activeNavClass);
      }
    });
  }

  componentDidMount() {
    if (document.querySelector(`a[href='${this.homeDefaultLink}#']`)) {
      document
        .querySelector(`a[href='${this.homeDefaultLink}#']`)
        .addEventListener("click", event => {
          event.preventDefault();
          this.scrollTo(window.pageYOffset, 0, this.scrollDuration);
          window.location.hash = "";
        });
    }

    this.navContent.current.querySelectorAll("a").forEach(navLink => {
      navLink.addEventListener("click", event => {
        event.preventDefault();
        let sectionID = this.getNavToSectionID(navLink.getAttribute("href"));

        if (sectionID) {
          if (document.getElementById(sectionID)) {
            let scrollTargetPosition =
              document.getElementById(sectionID).offsetTop -
              (this.headerBackground
                ? this.navContent.current.scrollHeight
                : 0);
            this.scrollTo(
              window.pageYOffset,
              scrollTargetPosition + this.offset,
              this.scrollDuration
            );
          } else {
            console.warn(
              `${SCROLLSPY_NAV_NAMESPACE}: no element with id ${sectionID} present in the DOM`
            );
          }
        } else {
          this.scrollTo(window.pageYOffset, 0, this.scrollDuration);
        }
      });
    });

    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  render() {
    return (
      <div ref={this.navContent} className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

export default ScrollspyNav;
