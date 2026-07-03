# Second-tool verification of the three GAL1025T headline estimates
# ----------------------------------------------------------------------
# Purpose: independently reproduce, in a second tool, the weighted percentages
# the Python scripts produced, to demonstrate tool-independence. This file is
# code only; it contains no respondent data. Obtain the public-use source file
# per DATA_AVAILABILITY.md and keep it in a local (git-ignored) raw/ folder.
#
# HOW TO RUN
#   jamovi: install the "Rj" module (Modules > jamovi library > Rj), open
#   GAL1025T_ATP_Portal.csv as the dataset, open the Rj Editor, paste this
#   script (the dataset is exposed as `data`), and Run.
#
#   Plain R: uncomment the read.csv line and set the path to your local file.
#
# VERIFIED OUTPUT (jamovi 2.7, R 4.5, CRAN snapshot 2025-05-25):
#   AI_USER 'Yes'    = 68.9   valid n = 1985
#   Teacher 'easier' = 72.5   valid n = 1984
#   Student 'harder' = 61.9   valid n = 1986
# matching the Python results and the audit-trail denominators to the reported
# precision.
# ----------------------------------------------------------------------

# data <- read.csv("path/to/GAL1025T_ATP_Portal.csv", stringsAsFactors = FALSE)  # plain-R only

w <- data$PORTAL_WEIGHT

pct <- function(target, valid) {
  round(100 * sum(w[target], na.rm = TRUE) / sum(w[valid], na.rm = TRUE), 1)
}

# 1) AI adoption: valid denominator = Yes + No
u <- data$AI_USER
cat("AI_USER 'Yes'    =", pct(u == "Yes", u %in% c("Yes", "No")),
    "  valid n =", sum(u %in% c("Yes", "No")), "\n")

# 2) Teachers' AI use makes teaching easier
#    valid denominator = the five substantive categories (incl. "no effect")
te <- data$AI_EASY_DIFF_TEACHER
vt <- grepl("easier|harder|no effect", te, ignore.case = TRUE)
cat("Teacher 'easier' =", pct(grepl("easier", te, ignore.case = TRUE), vt),
    "  valid n =", sum(vt), "\n")

# 3) Students' AI use makes teaching harder
st <- data$AI_EASY_DIFF_STUDENT
vs <- grepl("easier|harder|no effect", st, ignore.case = TRUE)
cat("Student 'harder' =", pct(grepl("harder", st, ignore.case = TRUE), vs),
    "  valid n =", sum(vs), "\n")
