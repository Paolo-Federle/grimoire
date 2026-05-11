import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Collapse from "@mui/material/Collapse";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const frameSx = (expanded, hasTitle) => ({
  position: "relative",
  mb: 3,
  mt: hasTitle ? 4.5 : 0,
  minWidth: 0,
  border: "1px solid",
  borderColor: "divider",
  borderLeft: hasTitle ? 0 : "1px solid",
  borderRadius: 1,
  backgroundColor: "transparent",
  px: { xs: 1.5, md: 2 },
  pb: expanded ? 2 : 1.25,
  pt: hasTitle ? 1.75 : 2,
  ...(hasTitle && {
    "&::before": {
      content: '""',
      position: "absolute",
      top: 5,
      bottom: 0,
      left: 0,
      borderLeft: "1px solid",
      borderColor: "divider",
      borderBottomLeftRadius: "inherit",
      pointerEvents: "none",
    },
  }),
  "&:last-of-type": {
    mb: 0,
  },
});

const titleWrapSx = {
  position: "absolute",
  top: 0,
  left: 0,
  transform: "translateY(-50%)",
  pb: 0.35,
  backgroundColor: "background.default",
  zIndex: 1,
};

const titleButtonSx = {
  alignItems: "center",
  gap: 0.5,
  py: 0.25,
  pr: 0.5,
  fontFamily: '"Merriweather", serif',
  fontSize: "1.5rem",
  fontWeight: 700,
  lineHeight: 1.2,
  textAlign: "left",
};

const titleLinkSx = {
  color: "primary.main",
  textDecoration: "underline",
  textUnderlineOffset: "0.14em",
  "&:hover": {
    color: "primary.dark",
  },
};

const iconButtonSx = {
  minWidth: 0,
  p: 0.25,
  color: "inherit",
};

function buildExtendedLink(basePath, linkExtension) {
  if (!linkExtension) {
    return null;
  }

  if (linkExtension.startsWith("/")) {
    return linkExtension;
  }

  const normalizedBasePath = basePath.replace(/\/$/, "");
  const normalizedExtension = linkExtension.replace(/^\//, "");

  return `${normalizedBasePath}/${normalizedExtension}`;
}

function renderSectionContent(section, renderSection) {
  if (renderSection) {
    return renderSection(section);
  }

  return section.content || null;
}

export default function TableGroup({
  title,
  subtitle,
  children,
  sections = [],
  defaultExpanded = true,
  collapsible = true,
  className = "",
  contentClassName = "",
  sectionClassName = "",
  renderSection,
  titleLink,
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const location = useLocation();
  const extendedTitleLink = buildExtendedLink(location.pathname, titleLink);

  const content = (
    <div className={`space-y-4 pl-4 md:pl-6 ${contentClassName}`}>
      {sections.map((section, index) => (
        <div key={section.key || section.title || index} className={sectionClassName}>
          {section.title && (
            <h2 className="mt-4 mb-2 text-xl font-bold">
              {section.title}
            </h2>
          )}

          {section.description && (
            <div className="mb-3 text-sm text-neutral-700">
              {section.description}
            </div>
          )}

          {renderSectionContent(section, renderSection)}
        </div>
      ))}

      {children}
    </div>
  );

  if (!collapsible) {
    return (
      <Box
        component="section"
        className={`w-full ${className}`}
        sx={frameSx(true, Boolean(title))}
      >
        {title && (
          <Box
            sx={{
              ...titleWrapSx,
              fontFamily: '"Merriweather", serif',
              fontSize: "1.5rem",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {extendedTitleLink ? (
              <Box component={Link} to={extendedTitleLink} sx={titleLinkSx}>
                {title}
              </Box>
            ) : (
              title
            )}
          </Box>
        )}
        {subtitle && <p className="text-sm text-neutral-700">{subtitle}</p>}
        {content}
      </Box>
    );
  }

  return (
    <Box
      component="section"
      className={`w-full ${className}`}
      sx={frameSx(expanded, Boolean(title))}
    >
      {title && (
        <Box sx={titleWrapSx}>
          {extendedTitleLink ? (
            <Box sx={{ ...titleButtonSx, display: "flex" }}>
              <Box component={Link} to={extendedTitleLink} sx={titleLinkSx}>
                {title}
              </Box>
              <ButtonBase
                onClick={() => setExpanded((current) => !current)}
                aria-expanded={expanded}
                aria-label={`${expanded ? "Collapse" : "Expand"} ${title}`}
                sx={iconButtonSx}
              >
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ButtonBase>
            </Box>
          ) : (
            <ButtonBase
              onClick={() => setExpanded((current) => !current)}
              aria-expanded={expanded}
              sx={titleButtonSx}
            >
              {title} {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ButtonBase>
          )}
        </Box>
      )}

      {subtitle && <p className="m-0 text-sm text-neutral-700">{subtitle}</p>}

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box sx={{ pt: 1 }}>
          {content}
        </Box>
      </Collapse>
    </Box>
  );
}
